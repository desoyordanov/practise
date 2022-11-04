const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/coaches/addcoach", controller.setCoachDetails);

  app.post("/api/coaches/addrequest", controller.addRequest);

  app.get("/api/coaches/getall", controller.getAllCoaches);
};
