const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  const { category, q, featured } = req.query;

  try {
    let filterQuery = {};

    if (category) {
      filterQuery.category = category;
    }

    if (q) {
      filterQuery = {
        ...filterQuery,
        $or: [
          { name: { $regex: q, $options: 'i' } },
          { description: { $regex: q, $options: 'i' } },
        ],
      };
    }

    if (featured === 'true') {
      filterQuery.featured = true;
    }

    const products = await Product.find(filterQuery);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

