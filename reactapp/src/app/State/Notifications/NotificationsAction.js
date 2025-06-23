import * as ActionTypes from "../ActionTypes";
import axios from "axios";

// Action to set the state of the orderReducer in redux-store
export const setNotifications = (userId, notifications) => ({
  type: ActionTypes.SET_NOTIFICATIONS,
  payload: { userId, notifications }
});


export const fetchNotifications = (userId) => {
    return function (dispatch) {
        axios.get(`http://localhost:9000/notifications/api/${userId}`)
            .then((response) => {
                // SAFELY check if response has notifications array, if not, then use empty array
                const notificationsData = response.data?.notifications ?? [];
                if (notificationsData.length) {
                    const localNotifArray = notificationsData.map(notifObj => ({
                        _id: notifObj._id,
                        type: notifObj.type,
                        content: notifObj.content,
                        navigateTo: notifObj.navigateTo
                    }));
                    dispatch(setNotifications(userId, localNotifArray));
                } else {
                    // If no response, clear redux-store of any orders data
                    dispatch(setNotifications(userId, []));
                }
            })
            .catch((err) => {
                console.log("Error While Fetching Notifications by User ID", err)
            });
    };
};

export const saveNotification = (userId, notification) => {
    return function (dispatch) {
        // notification = {type, content, navigateTo}
        axios.post(`http://localhost:9000/notifications/api/saveNotification`,
            {userId, notification}
        )
            .then((response) => {
                // SAFELY check if response has notifications array, if not, then use empty array
                const notificationsData = response.data?.notifications ?? [];
                if (notificationsData.length) {
                    const localNotifArray = notificationsData.map(notifObj => ({
                        _id: notifObj._id,
                        type: notifObj.type,
                        content: notifObj.content,
                        navigateTo: notifObj.navigateTo
                    }));
                    dispatch(setNotifications(userId, localNotifArray));
                } else {
                    // If no response, clear redux-store of any orders data
                    dispatch(setNotifications(userId, []));
                }
            })
            .catch((err) => {
                console.log("Error While Fetching Notifications by User ID", err)
            });
    };
};

export const deleteNotification = (userId, notificationId) => {
    return function (dispatch) {
        // notification = {type, content, navigateTo}
        axios.post(`http://localhost:9000/notifications/api/deleteNotification`,
            {userId, notificationId}
        )
            .then((response) => {
                // SAFELY check if response has notifications array, if not, then use empty array
                const notificationsData = response.data?.notifications ?? [];
                if (notificationsData.length) {
                    const localNotifArray = notificationsData.map(notifObj => ({
                        _id: notifObj._id,
                        type: notifObj.type,
                        content: notifObj.content,
                        navigateTo: notifObj.navigateTo
                    }));
                    dispatch(setNotifications(userId, localNotifArray));
                } else {
                    // If no response, clear redux-store of any orders data
                    dispatch(setNotifications(userId, []));
                }
            })
            .catch((err) => {
                console.log("Error While Fetching Notifications by User ID", err)
            });
    };
};
  