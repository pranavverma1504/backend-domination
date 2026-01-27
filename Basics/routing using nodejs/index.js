const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else if (req.url === "/contact") {
    res.end("Contact Page");
  } else {
    res.end("404 Page Not Found");
  }
});

server.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
