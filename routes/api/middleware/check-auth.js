const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log("hola");
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, "mysecretkey");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed"
    });
  }
};
