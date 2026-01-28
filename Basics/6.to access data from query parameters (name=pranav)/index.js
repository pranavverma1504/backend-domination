import express from "express";

const app = express();
const PORT = 3000;

app.get("/search", function (req, res) {
  const name = req.query.name;

  res.send(`Name is ${name}`);
});

app.listen(PORT, function () {
  console.log(`Server running on http://localhost:${PORT}`);
});
