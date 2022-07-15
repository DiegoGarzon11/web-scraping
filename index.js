const express = require('express');
const app = express();
const books = require('./app');

app.get('/', (_req, res) => {
	res.json(books);
});
app.listen(5555, () => {
	console.log('listening on port 5555');
});
