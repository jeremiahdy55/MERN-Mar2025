const express = require('express') //import package
const reviewsRouter = express.Router({strict:true, caseSensitive: true}) // a separate route table to create and handle our api's
const ReviewsModel = require('../DataModel/reviewsDataModel.js')

// Save order
reviewsRouter.post("/api/saveReview", async (req, res) => {
    console.log(req.body)
    try {
        const { userId, refModel, refObj, content } = req.body;
        const newReview = new ReviewsModel({
            userId, refModel, refObj, content
        });
        await newReview.save();
        const reviews = await ReviewsModel.find({ userId }).populate('refObj')
        console.log(reviews)
        res.json(reviews);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error adding to cart");
    }
  });

// Get reviews for this user
reviewsRouter.get("/api/:userId", async (req, res) => {
try {
    const reviews = await ReviewsModel.find({ userId: req.params.userId }).populate('refObj')
    res.json(reviews);
} catch (err) {
    res.status(500).send("Error retrieving orders");
}
});

// Get reviews for this product
reviewsRouter.get("/api/getReviewByObjId/:ObjId", async (req, res) => {
    try {
        const reviews = await ReviewsModel.find({ refObj: req.params.ObjId }).populate('refObj')
        res.json(reviews);
    } catch (err) {
        res.status(500).send("Error retrieving order in reorder API GET");
    }
    });

// reviewsRouter.get("/api/getReviewByOrderId/:orderId", async (req, res) => {
//     try {
//         const review = await ReviewsModel.findById({ _id: req.params.orderId })
//         console.log(review)
//         res.json(review);
//     } catch (err) {
//         res.status(500).send("Error retrieving order in reorder API GET");
//     }
//     });

module.exports = reviewsRouter;
