const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const saltRounds = 10;   // jitna zyada, utna secure (but slow)
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// example
hashPassword("mypassword123").then(hash => {
  console.log(hash);
});
