const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  const token = jwt.sign(
    { id: userId },              // payload (data inside token)
    process.env.JWT_SECRET,      // secret key
    { expiresIn: "7d" }          // token validity
  );

  return token;
};

module.exports = generateToken;
