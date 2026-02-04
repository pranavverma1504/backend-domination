const bcrypt = require("bcrypt");

const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

// example
comparePassword("mypassword123", storedHash)
  .then(result => {
    if (result) console.log("Password correct ✅");
    else console.log("Password wrong ❌");
  });
