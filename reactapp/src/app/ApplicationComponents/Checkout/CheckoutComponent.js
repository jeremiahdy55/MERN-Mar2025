import React, { useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../State/Cart/CartAction";
import { saveOrderToDB } from "../../State/Orders/OrderAction";
import SummaryTableRow from "./SummaryTableRow";

const CheckoutComponent = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const hasPaid = location.state?.hasPaid ?? false;

    const products = useSelector((state) => state.cartReducer.items); // get cart from redux
    const user = useSelector((state) => state.userReducer.user); // get cart from redux

    useEffect(() => {
        dispatch(fetchCart(user._id));
    }, [dispatch, user._id]);

    let goToPayment = (evt) => {
        alert("Thank you for the payment, your items are being processed!")
        dispatch(saveOrderToDB(user._id, new Date("2024-04-04"), products))
        navigate("/payment", { state: { hasPaid: true } });
        evt.preventDefault();
    }

    if (hasPaid) {
        return <div></div>
    } else {
        return (
            <div className="checkout-container">
                <h3><strong>Order Summary for: {user.userName}</strong></h3>
                <h5>Order will be delivered to: {user.street}</h5>
                {
                    products && products.length > 0 ?
                        (<div><table>
                            <thead>
                                <tr>
                                    <th>Quantity</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((productItem) => {
                                    return <SummaryTableRow product={productItem} key={productItem._id} />
                                })}
                            </tbody>
                        </table>
                            <h5>Total items ordered: {products.reduce((sum, product) => sum + product.qty, 0)}</h5>
                            <h5>Total price: {products.reduce((sum, product) => sum + (product.price * product.qty), 0)}</h5>
                            <button onClick={goToPayment}>Make Payment</button>
                        </div>
                        )
                        : (<div><h4>No Products To Display</h4></div>)
                }
            </div>
        );
    };
};

export default CheckoutComponent;