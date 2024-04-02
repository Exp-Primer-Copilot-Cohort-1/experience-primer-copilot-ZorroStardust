// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = [];
var server = http.createServer(function(req, res) {
  var parseUrl = url.parse(req.url, true);
  var pathname = parseUrl.pathname;
  if (pathname === '/') {
    fs.readFile('./index.html', function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.write(data.toString());
        res.end();
      }
    });
  } else if (pathname === '/post') {
    var comment = parseUrl.query;
    comments.push(comment);
    res.end();
  } else if (pathname === '/get') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write(JSON.stringify(comments));
    res.end();
  } else {
    fs.readFile('.' + pathname, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.write(data.toString());
        res.end();
      }
    });
  }
});
server.listen(8080);
console.log('Server is running at http://localhost:8080');