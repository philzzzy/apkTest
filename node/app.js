var http = require('http');

var server = http.createServer(function(req, res) {
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    res.writeHead(200, {
        "Content-Type":"text/html"
    });
    res.write('Hello');
    res.write(' World');
    res.end();
});

server.listen(3000);