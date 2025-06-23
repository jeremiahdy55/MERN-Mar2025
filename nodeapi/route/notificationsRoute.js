const express = require('express') //import package
const notificationsRouter = express.Router({strict:true, caseSensitive: true}) // a separate route table to create and handle our api's
const NotificationsModel = require('../DataModel/notificationDataModel.js')

// Save order
notificationsRouter.post("/api/saveNotification", async (req, res) => {
    console.log("SAVING NOTIFICATION")
    console.log(req.body)
    // Destructure the request body
    const { userId, notification } = req.body;
    try {
        // Try and find if the user has any previous notifications
        let userNotifications = await NotificationsModel.findOne({ userId });
        // Destructure the notification JSON object inside the request body
        let { type, navigateTo, content } = notification;

        // If the user did NOT have any prior notifications
        if (!userNotifications) {
            // create a new Document inside MongoDB
            userNotifications = new NotificationsModel({
                userId,
                notifications: [{ type, navigateTo, content }]
            });
        } else {
            // otherwise, add this notifcation to the list of notifications
            userNotifications.notifications.push({ type, navigateTo, content });
        }
        await userNotifications.save();

        res.json(userNotifications);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving notification");
    }
  });

// Get notifications for this user
notificationsRouter.get("/api/:userId", async (req, res) => {
    try {
        const notifications = await NotificationsModel.findOne({ userId: req.params.userId })
        // console.log(notifications)
        res.json(notifications);
    } catch (err) {
        res.status(500).send("Error retrieving notifications by userId");
    }
});

// delete notification (the user has clicked on the notification and is resolving it)
notificationsRouter.post("/api/deleteNotification", async (req, res) => {
    const { userId, notificationId } = req.body;
    try {
        const notifications = await NotificationsModel.findOneAndUpdate(
            { userId: userId },
            { $pull: { notifications: { _id: notificationId } } }, // pull the notification to delete from the array and discard it
            { new: true } // return updated document
          );
        res.json(notifications)
    } catch (err) {
        res.status(500).send("Error deleting notifications by notification Id");
    }
});

module.exports = notificationsRouter;
