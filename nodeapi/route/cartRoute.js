const express = require('express') //import package
const cartRouter = express.Router({strict:true, caseSensitive: true}) // a separate route table to create and handle our api's
const CartModel = require('../DataModel/cartDataModel');

// Add to cart or update quantity (one item)
cartRouter.post("/api/saveCartItem", async (req, res) => {
    const { userId, product} = req.body;
  
    try {
      let cart = await CartModel.findOne({ userId });
      let { productId, name, desc, rating, price, qty, category } = product;
  
      if (!cart) {
        cart = new CartModel({
          userId,
          items: [{ productId, name, desc, rating, price, qty, category }]
        });
      } else {
        const index = cart.items.findIndex(p => p.name.toString() === name);
        if (index > -1) {
          cart.items[index].qty += qty;
        } else {
          cart.items.push({ productId, name, desc, rating, price, qty, category });
        }
      }
        await cart.save();
  
      res.json(cart);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error adding to cart");
    }
  });

  // Add to cart or update quantity
cartRouter.post("/api/saveCartMultipleItems", async (req, res) => {
    const { userId, productsFromStore} = req.body;
    try {
      let cart = await CartModel.findOne({ userId });
    //   let { name, desc, rating, price, qty, category } = product;
  
      if (!cart) {
        let productList = []
        for (const product of productsFromStore) {
            let { productId, name, desc, rating, price, qty, category } = product;
            productList.push({ productId, name, desc, rating, price, qty, category });
        }
        cart = new CartModel({
          userId,
          items: productList
        });
      } else {
        cart.items = productsFromStore;
        // for (const product of productsFromStore) {
        //     let { name, desc, rating, price, qty, category } = product;
        //     const index = cart.items.findIndex(p => p.name.toString() === name);
        //     if (index > -1) {
        //       cart.items[index] = product;
        //     } else {
        //       cart.items.push({ name, desc, rating, price, qty, category });
        //     }
        // }
      }
      await cart.save();
      res.json(cart);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error adding to cart");
    }
  });
  
  // Get cart with populated products
  cartRouter.get("/api/:userId", async (req, res) => {
    try {
      const cart = await CartModel.findOne({ userId: req.params.userId })
        .populate("items"); // this gets full product details
      res.json(cart);
    } catch (err) {
      res.status(500).send("Error retrieving cart");
    }
  });

module.exports = cartRouter;