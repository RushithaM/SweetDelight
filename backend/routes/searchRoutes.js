const express = require('express');
const { searchProducts } = require('../controllers/searchController');
const router = express.Router();

router.get('/', searchProducts);

module.exports = router;
