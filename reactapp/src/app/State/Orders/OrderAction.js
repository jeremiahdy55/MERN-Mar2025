import * as ActionTypes from "../ActionTypes";
import axios from "axios";
import { setCart } from "../Cart/CartAction";

// Action to set the state of the orderReducer in redux-store
export const setOrders = (userId, orders) => ({
  type: ActionTypes.SET_ORDERS,
  payload: { userId, orders }
});

// Action to clear the state of the orderReducer in redux-store
export const clearOrders = () => ({
    type: ActionTypes.CLEAR_ORDERS
});


export const fetchOrders = (userId) => {
    return function (dispatch) {
        axios.get(`http://localhost:9000/orders/api/${userId}`)
          .then((response) => {
            const orderData = response.data;
            if (orderData) {
                const orders = [];
                for (const order of orderData) {
                    orders.push({_id: order._id, orderDate: order.orderDate, cart: order.cart, canceled: order.canceled});
                }
                dispatch(setOrders(userId, orders));
              } else {
                // If no response, clear redux-store of any orders data
                dispatch(clearOrders());
              }
          })
          .catch((err)=>{
              console.log("Error While Fetching Cart", err)
          });
    };
  };

export const saveOrderToDB = (userId, orderDate, cart) => {
  return function (dispatch) {
    axios.post(`http://localhost:9000/orders/api/saveOrder`, {
        userId,
        orderDate,
        cart
      })
      .then((response) => {
        const updatedOrders = response.data;
        const orders = [];
        for (const order of updatedOrders) {
            orders.push({_id: order._id, orderDate: order.orderDate, cart: order.cart, canceled: order.canceled});
        }
        dispatch(setOrders(userId, orders));
      })
      .catch((error) => {
        console.error("Error saving and retrieving orders:", error);
      });
}}

export const cancelOrderInDB = (userId, orderId, orderDateString) => {
    console.log("this is user id in cancelOrderInDB" + userId)
    return function (dispatch) {
        const orderDate = new Date(orderDateString);
        const today = new Date();
        const daysApart = (today - orderDate) / (1000 * 60 * 60 * 24);
        if (daysApart < 2) {
            axios.post(`http://localhost:9000/orders/api/cancelOrder`, {
                userId,
                orderId
              })
              .then((response) => {
                console.log("this is user id in cancelOrderInDB after receiving resposne from API" + userId)

                const updatedOrders = response.data;
                const orders = [];
                for (const order of updatedOrders) {
                    orders.push({_id: order._id, orderDate: order.orderDate, cart: order.cart, canceled: order.canceled});
                }
                dispatch(setOrders(userId, orders));
              })
              .catch((error) => {
                console.error("Error saving and retrieving orders:", error);
              });
        } else {
            alert("unable to cancel orders more than 2 days old")
        }
    }
}

