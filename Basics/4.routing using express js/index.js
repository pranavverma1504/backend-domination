import express from "express";

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Hello from Express using ES Modules 🚀");
});

// About route
app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
