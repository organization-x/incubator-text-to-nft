const express = require('express');
const http = require('http');
const {PythonShell} =require('python-shell');
const {middleware} =require('connect');
const hostname = 'localhost';
const app = express();
const port = 4500;

const server = http.createServer((req, res) => {
   // PythonShell.run('mint.py', null, function (err) {
  //   if (err) throw err;
  //   console.log('finished');
  // });
  console.log(`Prior to post`);
  app.use(express.json());
app.use(express.urlencoded());
app.post('/post', function(req, res) {
  console.log("works");
  var name = req.body
  console.log(name);
  
});
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});