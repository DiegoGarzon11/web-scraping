const express = require('express');
const path = require('node:path');

const datos = require('./src/home.js');
const app = express();
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (_, res) => {
	res.sendFile(path.resolve(__dirname, './src/views/index.html'));
});
app.get('/api/:id', (req, res) => {
	let nuevo = datos.slice(0, 51);
	const id = req.params.id;
	res.json(nuevo[id]);
});
app.listen(3000, () => console.log('on port 3000'));
