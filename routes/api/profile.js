const express = require("express");
const router = express.Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    //if user is not logged in
    res.redirect("/api/auth/google");
  } else {
    //if user is logged in
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  //res.send("you are logged in and this is your profile" + req.user.username);
  res.redirect("http://localhost:3000/profile");
});

module.exports = router;
