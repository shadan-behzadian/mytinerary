const express = require("express");
const router = express.Router();

//Item model

const Activity = require("../../models/Activity");

//get router

//router.get
router.get("/", (req, res) => {
  Activity.find().then(activities => res.json(activities));
});

//to get activities for one title of itinerary
//only doing this part the backend should filter and work by the parameter you give it
router.get("/:activitytitle", (req, res) => {
  Activity.find({ itineraryReference: req.params.activitytitle }).then(
    activities => {
      if (activities.length === 0) {
        return res.json({
          activities: "itinerary for this City is not found"
        });
      }

      res.json(activities);
    }
  );
});

router.post("/", (req, res) => {
  const newActivity = new Activity({
    itineraryReference: req.body.itineraryReference,
    image: req.body.image,
    title: req.body.title
  });

  newActivity.save().then(activities => res.json(activities));
});

module.exports = router;
