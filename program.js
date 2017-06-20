var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader('Content-Type', 'text/html; charset=utf-8');
	if (request.method === 'GET' && request.url === '/') {
		fs.readFile('index.html', function (err, data) {
			if (err) {
				throw err;	
			} else {
				response.write(data);
			}
			response.end();
		});
	} else {
		fs.readFile('cat.jpeg', function (err, data) {
		 	response.writeHead(404, { 'Content-Type': 'image/jpeg' });
			response.end(data);
		});
	}
});
server.listen(8080);