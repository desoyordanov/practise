const db = require("./app/models");
const User = db.user;
const jwt_decode = require("jwt-decode");
const { FB } = require("fb");
var bcrypt = require("bcryptjs");

function createUser(accessKey, type, usrObj) {
  let user = "test";
  if (type === "gg") {
    const decodedToken = jwt_decode(accessKey);
    user = new User({
      username: decodedToken.name,
      email: decodedToken.email,
      isCoach: false,
      password: bcrypt.hashSync(usrObj.password, 8),
    });
  } else if (type === "fb") {
    FB.api(
      "me",
      { fields: ["name", "email"], access_token: accessKey },
      (res) => {
        console.log(user);
        user = new User({
          username: res.name,
          email: res.email,
          isCoach: false,
        });
        console.log("from FB api");
      }
    );
  } else {
    user = new User({
      username: usrObj.name,
      email: usrObj.email,
      isCoach: false,
      password: bcrypt.hashSync(usrObj.password, 8),
    });
  }
  return user;
}

module.exports = { createUser };
