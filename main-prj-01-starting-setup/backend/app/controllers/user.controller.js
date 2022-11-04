const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.setCoachDetails = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.body.id },
    {
      isCoach: true,
      description: req.body.description,
      rate: req.body.rate,
      categories: req.body.categories,
    },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

exports.addRequest = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.body.id },
    { requests: req.body.requests },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

exports.getMe = (req, res) => {
  User.find({ _id: req.body.id }, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
};

exports.getAllCoaches = (req, res) => {
  User.find({ isCoach: true }, (err, coaches) => {
    if (err) {
      res.send(err);
    } else {
      res.send(coaches);
    }
  });
};
