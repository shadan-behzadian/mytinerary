const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const googleKeys = require("../../config/keys");
const Usergoogle = require("../../models/Usergoogle");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Usergoogle.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      //options for google start
      callbackURL: "/api/auth/google/redirect",
      clientID: googleKeys.google.clientID,
      clientSecret: googleKeys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("passport call back function is fired");
      console.log(profile);

      //check if user already exists in the database
      Usergoogle.findOne({ googleid: profile.id }).then(currenUser => {
        if (currenUser) {
          //user already exists
          console.log("user is " + currenUser);
          done(null, currenUser);
        } else {
          //creat a new user

          new Usergoogle({
            username: profile.displayName,
            googleid: profile.id
          })
            .save()
            .then(newUser => {
              console.log("new user created" + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
