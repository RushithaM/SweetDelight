const Product = require('../models/Product');
let cart = [];
exports.addToCart = async (req, res) => {
  const { productId } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ productId, quantity: 1 });
    }

    res.json({ message: 'Product added to cart successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getCart = (req, res) => {
  res.json(cart);
};
