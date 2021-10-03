const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  //   res.write();
  res.end(`Hi it's res`);
});

server.listen(5000);
