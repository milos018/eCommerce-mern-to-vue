const { Router } = require('express');
const router = Router();

const {
	getAllProducts,
	getProductByProductId,
} = require('../controllers/Product.controller');

router.get('/', getAllProducts);
router.get('/:productId', getProductByProductId);

module.exports = router;
