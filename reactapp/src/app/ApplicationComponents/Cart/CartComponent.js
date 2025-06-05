import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, saveCartMultipleItems } from "../../State/Cart/CartAction";
import DisplayProducts from "./DisplayProducts";

const CartComponent = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.cartReducer.items); // get store-products from redux
    const user = useSelector((state) => state.userReducer.user); // get store-user from redux
    console.log("Products in cartComponent is: " + products);

    // on mount, do this
    useEffect(() => {
        dispatch(fetchCart(user._id));
    }, [dispatch, user._id]);

    let goToCheckout = (evt) => {
        dispatch(saveCartMultipleItems(user._id, products))
        navigate("/checkout");
        evt.preventDefault();
    }

    return (
        <div className="cart-container">
            <DisplayProducts />
            <h2>Your Cart</h2>
            {(!products || products.length === 0) ? (
                <p>Cart is empty</p>
            ) : (
                <ul className="cart-list">
                    {products.map((item, index) => (
                        <li key={index} className="cart-item">
                            <div><h4>Quantity: {item.qty}</h4></div>
                            <div><strong>{item.name}</strong></div>
                            <div>Price: ${item.price}</div>
                            <div>Desc: {item.desc}</div>
                            <div>Rating: {item.rating}</div>
                            <div>Category: {item.category}</div>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={goToCheckout}>Checkout</button>

        </div>
    );
};

export default CartComponent;