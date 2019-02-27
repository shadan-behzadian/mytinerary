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

module.exports = router;
