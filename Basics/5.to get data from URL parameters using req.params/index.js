import express from "express";

const app = express();
const PORT = 3000;

// Dummy data 
const users = [
  { id: "1", name: "Pranav" },
  { id: "2", name: "Rahul" },
  { id: "3", name: "Amit" }
];

// Get user by ID using req.params
app.get("/users/:id", function (req, res) {
  const id = req.params.id;

  const user = users.find(function (u) {
    return u.id === id;
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// Server start
app.listen(PORT, function () {
  console.log(`Server running on http://localhost:${PORT}`);
});
