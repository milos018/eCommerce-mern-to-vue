const express = require('express');
const app = express();
const cors = require('cors');

const products = require('./data/products');

app.use(express.json());
app.use(cors());

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/products/:productId', (req, res) => {
	const { productId } = req.params;
	const product = products.find((product) => product._id === productId);
	res.json(product);
});

app.get((error, req, res, next) => {
	if (error) {
		return res.json(error.message);
	}
});

module.exports = app;
