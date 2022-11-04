const db = require("../models");
const Coach = db.coach;

exports.addCoach = (req, res) => {
  const coach = new Coach({
    fullname: req.body.fullname,
    description: req.body.description,
    rate: req.body.rate,
    categories: req.body.categories,
  });

  coach.save((err, coach) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.send({ message: "Coach was added successfully" });
    }
  });
};

exports.getAllCoaches = (req, res) => {
  Coach.find({}, (err, coaches) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send(coaches);
  });
};
