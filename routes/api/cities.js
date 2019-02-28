const express = require("express");
const router = express.Router();
const checkAuth = require("./middleware/check-auth");

//Item model

const City = require("../../models/City");

//@route Get api/items
//desc Get all items
//acess public

//router.get
router.get("/", (req, res) => {
  City.find().then(cities => res.json(cities));
});

router.post("/", (req, res) => {
  const newCity = new City({
    country: req.body.country,
    city: req.body.city
  });

  newCity.save().then(city => res.json(city));
});

router.post("/add", checkAuth, (req, res) => {
  console.log(req.body);

  City.find({ city: req.body.newCity.city }).then(city => {
    if (city.length >= 1) {
      return res.status(409).json({
        message: "this city already exists"
      });
    } else {
      const newCity = new City({
        country: req.body.newCity.country,
        city: req.body.newCity.city
      });

      newCity.save().then(city => res.json(city));
    }
  });
});

//router.delete
router.delete("/:id", checkAuth, (req, res) => {
  City.findById(req.params.id)
    .then(city =>
      city
        .remove({ _id: req.params.id })
        .then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
