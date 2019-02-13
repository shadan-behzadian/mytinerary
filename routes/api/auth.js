const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

//callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  //res.send(req.user);
  //to redirect the person to the new api which is their profile api
  res.redirect("/api/profile");
});

//logout with passport

router.get("/logout/google", (req, res) => {
  res.send("logging out ");
});

module.exports = router;
