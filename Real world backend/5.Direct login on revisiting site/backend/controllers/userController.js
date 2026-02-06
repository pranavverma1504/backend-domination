export const getUserData = (req, res) => {
  try {
    res.status(200).json({
      isAuthenticated: true,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to get user data" });
  }
};
