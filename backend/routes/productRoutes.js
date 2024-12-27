const express = require('express');
const { getAllProducts, getProductById } = require('../controllers/productController');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);

module.exports = router;
