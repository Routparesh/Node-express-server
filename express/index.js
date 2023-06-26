const express = require('express');

const app = express();

const port = 4010;

app.get('/', (req, res) => {
	res.send('<h1>paresh</h1>');
});

app.get('/about', (req, res) => {
	res.send('<p>My name is paresh</p>');
});

app.get('/contact', (req, res) => {
	res.send('<p>I am from Odisha</p>');
});

app.listen(port, () => {
	console.log(`server listening on ${port}`);
});
