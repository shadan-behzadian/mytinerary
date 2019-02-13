const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
//to encrypt password:
const bcrypt = require("bcrypt");
//const checkAuth = require("./middleware/check-auth");
const passport = require("passport");
const checkAuth = require("./middleware/check-auth");

//Item model

const User = require("../../models/User");

router.post("/signup", (req, res, next) => {
  //to check wether this user exist before signing up with the same email

  User.find({ email: req.body.newUser.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "this email already exists please try with a new email"
        });
      } else {
        bcrypt.hash(req.body.newUser.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              // date: req.body.newUser.date,
              name: req.body.newUser.name,
              email: req.body.newUser.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "user created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
});

router.post("/login", (req, res, next) => {
  User.find({ email: req.body.existingUser.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        //401 is unathorized its a good practice here to not say that the email does not exist for hacking purposes
        return res.status(401).json({ message: "Auth failed" });
      }
      bcrypt.compare(
        req.body.existingUser.password,
        user[0].password,
        (err, result) => {
          if (err) {
            return res.status(401).json({ message: "Auth failed" });
          }
          if (result) {
            const token = jwt.sign(
              {
                email: user[0].email,
                userId: user[0]._id
              },
              "mysecretkey",
              { expiresIn: "1h" }
            );
            return res.status(200).json({
              message: "Auth successful",
              token: token
            });
          }
          res.status(401).json({
            message: "Auth failed"
          });
        }
      );
    });
});

router.delete("/:userId", (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({ message: "User successfully deleted" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/currentUser", checkAuth, (req, res) => {
  //req.user comes from the check auth middlewae function
  User.find({ email: req.user.email }).then(items => res.json(items));
});

// router.put("/:userId", (req, res, next) => {
//   console.log(req.body.fav);
//   User.findByIdAndUpdate(
//     { _id: req.params.userId },
//     { favouriteItineraries: [...favouriteItineraries, req.body.fav] }
//   ).then(function() {
//     User.findOne({ _id: req.params.userId }).then(function(user) {
//       res.send(user);
//     });
//   });
// });

// router.put("/:userId", (req, res, next) => {
//   console.log(req.body.fav);
//   User.findOne({ _id: req.params.userId })
//     .exec()
//     .then(function(user) {
//       User.findByIdAndUpdate(
//         { _id: req.params.userId },
//         { favouriteItineraries: [...user.favouriteItineraries, req.body.fav] }
//       ).then(function() {
//         User.findOne({ _id: req.params.userId }).then(function(user) {
//           res.send(user);
//         });
//       });
//     });
// });

router.put("/:userId", (req, res, next) => {
  console.log(req.body.fav);
  User.findOne({ _id: req.params.userId })
    .exec()
    .then(function(user) {
      if (user.favouriteItineraries.includes(req.body.fav)) {
        console.log("found a copy");
        // User.findOneAndDelete(
        //   { _id: req.params.userId },
        //   { favouriteItineraries: user.favouriteItineraries }
        // );
        console.log("tried to remove it");
      } else {
        User.findByIdAndUpdate(
          { _id: req.params.userId },
          { favouriteItineraries: [...user.favouriteItineraries, req.body.fav] }
        ).then(function() {
          User.findOne({ _id: req.params.userId }).then(function(user) {
            res.send(user);
          });
        });
      }
    });
});

// router.put("/updateDetails/:userId", (req, res, next) => {
//   console.log(req.body.detail);
//   User.findById(req.params.userId)
//     .exec()
//     .then(function(user) {
//       User.findByIdAndUpdate(
//         { _id: req.params.userId },
//         { name: req.body.detail.name }
//       );
//     })
//     .then(function() {
//       User.findOne({ _id: req.params.userId }).then(function(user) {
//         res.send(user);
//       });
//     });
// });

router.get("/:userId", (req, res, next) => {
  User.findById({ _id: req.params.userId })
    .exec()
    .then(user => res.json(user));
});

//log in with google passport

// router.get(
//   "/login/google",
//   passport.authenticate("google", {
//     scope: ["profile"]
//   })
// );

// //callback route for google to redirect to
// router.get("/google/redirect", (req, res) => {
//   res.send("you reached call back url");
// });

// //logout with passport

// router.get("/logout/google", (req, res) => {
//   res.send("logging out ");
// });

/////////////////////////////////////////////////////////////////////////////////

// router.get("/", (req, res) => {
//   User.find().then(users => res.json(users));
// });

// router.post("/", (req, res) => {
//   const newUser = new User({
//     name: req.body.newUser.name,
//     email: req.body.newUser.name,
//     password: req.body.newUser.password,
//     date: req.body.newUser.date
//   });

//   newUser.save().then(user => res.json(user));
// });

// router.post("/login", (req, res, next) => {
//   User.find({
//     email: req.body.email
//   })
//     .exec()
//     .then(user => {
//       if (user.length < 1) {
//         return res.status(401).json({
//           message: "authorization failed"
//         });
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

//--------------------------------------------------------------------------------

// router.get("/", (req, res) => {
//   res.json({
//     message: "welcome to the api"
//   });
// });

// router.post("/", verifyToken, (req, res) => {
//   jwt.verify(req.token, "secretkey", (err, authData) => {
//     if (err) {
//       res.sendStatus(403);
//     } else {
//       res.json({
//         message: "post created",
//         authData
//       });
//     }
//   });
// });

// router.post("/login", (req, res) => {
//   const user = {
//     email: "shadan_b8@yahoo.com",
//     password: "12345"
//   };

//   jwt.sign({ user: user }, "secretkey", (err, token) => {
//     res.json({
//       token: token
//     });
//   });
// });

// //Format of token
// //AUthorization: Bearer <access_token>
// //verify Token

// function verifyToken(req, res, next) {
//   //get auth header value
//   const bearerHeader = req.headers["authorization"];
//   //check if bearer is undefined
//   if (typeof bearerHeader !== "undefined") {
//     //split at the space
//     const bearer = bearerHeader.split(" ");
//     //get token from array
//     const bearerToken = bearer[1];
//     //set token
//     req.token = bearerToken;
//     //next middleware
//     next();
//   } else {
//     //forbidden
//     res.sendStatus(403);
//   }
// }

module.exports = router;
