const express = require("express");
const router = express.Router();
//const multer = require("multer");
//const upload = multer({ des: "uploads/" });
//const checkAuth = require("./middleware/check-auth");
const checkAuth = require("./middleware/check-auth");

//Item model

const Itinerary = require("../../models/Itinerary");

//@route Get api/items
//desc Get all items
//acess public

//router.get
router.get("/", (req, res) => {
  const itineraries = [];
  Itinerary.find()
    // .populate("lala")
    .then(itineraries => res.json(itineraries));
});

// @route   GET api/mytineraries/:city
// @desc    Get itineraries by city
// @access  Public
//what you write in front of /: should be equal to whatyou write after req.param.
// this line indicates that go to itinerary collections and find the city name that is equal to :city and get all the
//itineraries for that if the number of itineraries with that city name were not zero then give me the json for that
router.get("/:city", (req, res) => {
  Itinerary.find({ city: req.params.city })
    .populate("activities")
    .then(itineraries => {
      if (itineraries.length === 0) {
        // res.status(400).
        return res.json({
          error: `Itinerary for ${req.params.city} is not found`
        });
      }

      res.json(itineraries);
    });
});

// router.post("/", (req, res) => {
//   const newItinerary = new Itinerary({
//     city: req.body.city,
//     title: req.body.title,
//     profilePic: req.body.profilePic,
//     rating: req.body.rating,
//     duration: req.body.duration,
//     price: req.body.price,
//     hashtag: req.body.hashtag
//   });

//   newItinerary.save().then(itinerary => res.json(itinerary));
// });

router.post("/addMytinerary", checkAuth, (req, res) => {
  const newItinerary = new Itinerary({
    city: req.body.newMytinerary.city,
    title: req.body.newMytinerary.title,
    profilePic: req.body.newMytinerary.profilePic,
    rating: req.body.newMytinerary.rating,
    duration: req.body.newMytinerary.duration,
    price: req.body.newMytinerary.price,
    hashtag: req.body.newMytinerary.hashtag
  });

  newItinerary.save().then(itinerary => res.json(itinerary));
});

router.post("/fav", (req, res, next) => {
  for (i = 0; i < req.body.favIds.length; i++) {
    Itinerary.find({ _id: req.body.favIds }).then(itineraries =>
      res.json(itineraries)
    );
  }
});

router.delete("/:id", (req, res) => {
  Itinerary.findById(req.params.id)
    .then(itinerary =>
      itinerary
        .remove({ _id: req.params.id })
        .then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
});

//to post an image

// router.post("/", upload.single("userimage"), (req, res) => {
//   console.log(req.file);

//   const newItinerary = new Itinerary({
//     city: req.body.city,
//     title: req.body.title,
//     profilePic: req.body.profilePic,
//     rating: req.body.rating,
//     duration: req.body.duration,
//     price: req.body.price,
//     hashtag: req.body.hashtag
//   });

//   newItinerary.save().then(itinerary => res.json(itinerary));
// });

module.exports = router;
