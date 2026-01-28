const http = require("http");

const server = http.createServer((req, res) => {
  
  res.end("welcome to node js server");
});

server.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
