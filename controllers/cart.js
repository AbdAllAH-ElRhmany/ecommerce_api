const Cart = require("../models/Cart");

exports.insertCart = async (req, res, next) => {
  const cart = new Cart(req.body);

  try {
    const savedCart = await Cart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCart);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });

    res.status(200).json(cart);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getAllCarts = async (req, res) => {
  try {
    carts = await Cart.find();

    res.status(200).json(carts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
