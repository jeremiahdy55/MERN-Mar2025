import React from "react";
import OrderTableRow from "./OrderTableRow";
import { cancelOrderInDB } from "../../State/Orders/OrderAction";
import { repopulateCartWithOrder } from "../../State/Cart/CartAction";
import { useDispatch } from "react-redux";
import ReviewModal from "../Reviews/ReviewModal";

let OrderTable = ({userId, order})=>{
    const dispatch = useDispatch();
    const orderDate = new Date(order.orderDate);
    const today = new Date();
    const daysApart = (today - orderDate) / (1000 * 60 * 60 * 24);
    const inProgress = !order.canceled && daysApart < 2
    const cancelStr = order.canceled ? "Canceled" : "Finished"
    console.log(daysApart)

    console.log(inProgress)
    // console.log("daysApart" + daysApart)
    // console.log("order.canceled" + order.canceled)
    // console.log("inProgress" +  inProgress)
    // console.log("cancelStr" + cancelStr)
    return(
        <div>
        <h4>Order Date: {order.orderDate}</h4>
        <h5>Status: {inProgress ? "In progress" : cancelStr}</h5>
        <table>
            <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Review Product</th>
                </tr>
            </thead>
            <tbody>
                {order.cart.map((productItem) => {
                    return <OrderTableRow userId={userId} product={productItem} key={productItem._id} />
                })}
            </tbody>
        </table>
        <button style={{ backgroundColor: 'rgb(64, 162, 7)' }}
                    onClick={() => dispatch(repopulateCartWithOrder(userId, order._id))}>
            Reorder
        </button>
            {inProgress ? 
                <button style={{ backgroundColor: 'rgb(170, 4, 4)' }}
                    onClick={() => dispatch(cancelOrderInDB(userId, order._id, order.orderDate))}>
                    Cancel Order
                </button> :
                <ReviewModal userId={userId} refModel='orders' refObj={order._id}/>
            }
        </div>
    )
}

export default OrderTable;