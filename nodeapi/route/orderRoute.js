const express = require('express') //import package
const orderRouter = express.Router({strict:true, caseSensitive: true}) // a separate route table to create and handle our api's
const OrderModel = require('../DataModel/orderDataModel.js')

// Save order
orderRouter.post("/api/saveOrder", async (req, res) => {
    try {
        const { userId, orderDate, cart} = req.body;
        const newOrder = new OrderModel({
            userId, orderDate, cart
        });
        await newOrder.save();
        const orders = await OrderModel.find({ userId })
        res.json(orders);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error adding to cart");
    }
  });

// Cancel order
orderRouter.post("/api/cancelOrder", async (req, res) => {
    try {
        const { userId, orderId } = req.body;
        const order = await OrderModel.findByIdAndUpdate(orderId, { canceled: true });
        const orders = await OrderModel.find({ userId })
        res.json(orders);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get orders for this user
orderRouter.get("/api/:userId", async (req, res) => {
try {
    const orders = await OrderModel.find({ userId: req.params.userId })
    res.json(orders);
} catch (err) {
    res.status(500).send("Error retrieving orders");
}
});

// Get orders for this user
orderRouter.get("/api/getOrder/:orderId", async (req, res) => {
    try {
        const order = await OrderModel.findById({ _id: req.params.orderId })
        console.log(order)
        res.json(order);
    } catch (err) {
        res.status(500).send("Error retrieving order in reorder API GET");
    }
    });

module.exports = orderRouter;
