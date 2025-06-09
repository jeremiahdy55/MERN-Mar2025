import React from "react";
import OrderTableRow from "./OrderTableRow";
import { cancelOrderInDB } from "../../State/Orders/OrderAction";
import { useDispatch } from "react-redux";

let OrderTable = ({userId, order})=>{
    const dispatch = useDispatch();

    return(
        <div>
        <h4>Order Date: {order.orderDate}</h4>
        <table>
            <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {order.cart.map((productItem) => {
                    return <OrderTableRow product={productItem} key={productItem._id} />
                })}
            </tbody>
        </table>
         <button 
            style={{ backgroundColor: 'rgb(170, 4, 4)' }}
            onClick={()=>dispatch(cancelOrderInDB(userId, order._id, order.orderDate))}
        >
        Cancel Order
        </button>
        </div>
    )
}

export default OrderTable;