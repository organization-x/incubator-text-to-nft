const http = require('http');
const {PythonShell} =require('python-shell');
const hostname = '127.0.0.1';
const port = 4500;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(`Server running at http://${hostname}:${port}/`);
  PythonShell.run('mint.py', null, function (err) {
    if (err) throw err;
    console.log('finished');
  });
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
