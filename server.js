const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");
const cities = require("./routes/api/cities");
const itineraries = require("./routes/api/itineraries");
const activities = require("./routes/api/activities");
const comments = require("./routes/api/comments");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const app = express();
const cookieSession = require("cookie-session");
const passport = require("passport");
const profile = require("./routes/api/profile");

const passportSetUp = require("./routes/api/passport");

const keys = require("./config/keys");

//bodyparser midddleware
app.use(bodyParser.json());

//encrypting he user id signed in with google
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

//initialize passport

app.use(passport.initialize());
app.use(passport.session());

//DB config
const db = require("./config/keys").mongoURI;

//connect to mongo

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

//use routes

app.use("/api/items", items);
app.use("/api/cities", cities);
app.use("/api/itineraries", itineraries);
app.use("/api/activities", activities);
app.use("/api/comments", comments);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

//you did not writ '${port}' you wrote `${port}` be aware of commias
// app.listen(port, () => console.log(`server started on port  ${port}`));

//Static file declaration
app.use(express.static(__dirname + "/public"));

// //production mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));
//   //
//   app.get("*", (req, res) => {
//     res.sendfile(path.join((__dirname = "client/build/index.html")));
//   });
// }
// //build mode
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/public/index.html"));
// });

app.get("/", function(req, res) {
  res.render("index");
});

//start server
app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
