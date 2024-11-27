const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set the response header
  res.end(req.url); // read and display query
});

// Listen on a specific hostname and port
const hostname = 'localhost'; // corresponds to loopback address of 127.0.0.1
const port = 3000; // Port number

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});


