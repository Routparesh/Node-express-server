const http = require('http');
// const { json } = require('stream/consumers');

const port = 3070;

const server = http.createServer((req, res) => {
	//Home
	//About
	//product
	//Contact
	if (req.url == '/') {
		res.statusCode = 200;
		res.setHeader = ('Content-Type', 'text/plain');
		res.end('Welcome to the Digital Bhem');
	} else if (req.url == '/product') {
		const options = {
			hostname: 'fakestoreapi.com',
			path: '/products/1',
			method: 'GET',
		};
		const apiReq = http.request(options, (apiRes) => {
			apiRes.on('data', (data) => {
				res.statusCode = 200;
				res.setHeader = ('Content-Type', 'application/json');
				res.end(data.toString());
			});
		});
		apiReq.on('error', () => {
			console.log(e);
		});
		apiReq.end();
	} else if (req.url == '/about') {
		res.statusCode = 200;
		res.setHeader = ('Content-Type', 'text/plain');
		res.end('This is a software company');
	} else if (req.url == '/contact') {
		res.statusCode = 200;
		res.setHeader = ('Content-Type', 'text/plain');
		res.end('My name is paresh');
	} else {
		res.statusCode = 500;
		res.setHeader = ('Content-Type', 'text/plain');
		res.end('server error!');
	}
});

server.listen(port, () => {
	console.log(`listening on port no ${port}`);
});
