const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const jwt_decode = require("jwt-decode");
const { FB } = require("fb");
const createUser = require("../../createUser");

exports.signup = (req, res) => {
  // const user = new User({
  //   username: req.body.kur1,
  //   email: req.body.kur2,
  //   password: bcrypt.hashSync(req.body.password, 8),
  // });
  const usrObj = {
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  const user = createUser.createUser(
    req.body.accessToken,
    req.body.type,
    usrObj
  );

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  let email;
  if (!req.body.accessToken) {
    email = req.body.email;
  } else {
    const decodedToken = jwt_decode(req.body.accessToken);
    email = decodedToken.email;
  }

  User.findOne({
    email: email,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      if (!req.body.type) {
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        _id: user._id,
        username: user.username,
        email: user.email,
        isCoach: user.isCoach,
        description: user.desicription,
        rate: user.rate,
        requests: user.requests,
        categories: user.categories,
        roles: authorities,
        accessToken: token,
      });
    });
};
