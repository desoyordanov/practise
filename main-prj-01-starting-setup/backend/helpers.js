function decodeToken(accessToken, type) {
  let email;
  let name;
  console.log(accessToken, type);
  if (type === "fb") {
    FB.api(
      "me",
      { fields: ["name", "email"], access_token: req.body.accessToken },
      function (res) {
        console.log(res);
        email = res.email;
        username = res.name;
      }
    );

    return { email: email, name: name };
  } else {
    const jwt_decode = require("jwt-decode");
    const decodedToken = jwt_decode(accessToken);
    email = decodedToken.email;
    name = decodedToken.username;
  }
}


