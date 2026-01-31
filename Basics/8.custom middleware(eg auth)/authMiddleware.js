const authMiddleware = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      message: "Password is required"
    });
  }

  if (password === "12345") {
    next(); // allow request
  } else {
    res.status(401).json({
      message: "Wrong password"
    });
  }
};

export default authMiddleware;
