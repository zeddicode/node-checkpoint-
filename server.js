import http from 'http';


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('<h1> Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});