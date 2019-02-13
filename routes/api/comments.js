const express = require("express");
const router = express.Router();
const checkAuth = require("./middleware/check-auth");

//Item model

const Comment = require("../../models/Comment");

//@route Get api/comment
//desc Get all comment
//acess public

//router.get
router.get("/", (req, res) => {
  var mySort = { date: -1 };
  Comment.find()
    .sort(mySort)
    .then(comments => res.json(comments));
});

//@route post api/comment
//desc post  comment
//acess public

router.post("/", checkAuth, (req, res) => {
  console.log(req.body);
  const newComment = new Comment({
    itineraryReference: req.body.newPost.itineraryReference,
    message: req.body.newPost.message,
    user: req.body.newPost.user,
    date: req.body.newPost.date
  });
  console.log(newComment);
  newComment.save().then(comment => res.json(comment));
});

// @route   post
// @desc    Add post
// @access  Public
router.post("/addpost/:itineraryReference", (req, res) => {
  const newComment = new Comment({
    message: req.body.message,
    user: req.body.newPost.user,
    itineraryReference: req.body.newPost.itineraryReference,
    date: req.body.newPost.date
  });
  newComment
    .save()
    .then(newComment => res.json(newComment))
    .catch(err => console.log(err));
});

// @route   get commment by itineray title
//@access  Public
router.get("/:itineraryReference", (req, res) => {
  const itineraries = null;

  Comment.find({ itineraryReference: req.params.itineraryReference }).then(
    itineraries => {
      if (itineraries.length === 0) {
        // res.status(400).json(
        return res.json({
          itineraries: "No comments for this itinerary."
        });
      }
      res.json(itineraries);
    }
  );
});

module.exports = router;
