const { Router } = require('express');
const { isValidObjectId } = require('mongoose');
const router = Router();

const ProductModel = require('../models/model.Product');

// @desc Get All Products
// @route GET /api/v1/products
// @access Public
router.get('/', async (req, res, next) => {
	let products;
	try {
		products = await ProductModel.find({});
		if (products.length === 0) return next(new Error('No products found'));
	} catch (error) {
		return next(error);
	}

	res.status(200).json(products);
});

// @desc Get Single Product by Product ID
// @route GET /api/v1/products/:productId
// @access Public
router.get('/:productId', async (req, res, next) => {
	const { productId } = req.params;

	if (!isValidObjectId(productId)) {
		return next(new Error('Not valid ID!'));
		// return res.status(400).json('Not valid ID');
	}

	let product;
	try {
		product = await ProductModel.findById(productId);
		if (!product) {
			return next(new Error('Product not found with this ID'));
		}
	} catch (error) {
		return next(error);
	}

	res.status(200).json(product);
});

module.exports = router;
