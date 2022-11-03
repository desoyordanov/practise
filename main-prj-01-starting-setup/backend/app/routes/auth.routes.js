const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [verifySignUp.checkRolesExisted],
    controller.signup
  );
  app.post("/api/auth/me", userController.getMe);
  app.post("/api/auth/signin", controller.signin);
};
