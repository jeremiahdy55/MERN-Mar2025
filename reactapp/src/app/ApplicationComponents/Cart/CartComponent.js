import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeItemFromCart, saveCartMultipleItems } from "../../State/Cart/CartAction";
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
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Category</th>
                            <th>Delete Item</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((item, index) => (
                        <tr key={index} className="cart-item">
                            <td><strong>{item.name}</strong></td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                            <td>{item.desc}</td>
                            <td>{item.rating}</td>
                            <td>{item.category}</td>
                            <td>
                                <button 
                                    style={{ backgroundColor: 'rgb(170, 4, 4)' }}
                                    onClick={()=>dispatch(removeItemFromCart(user._id, item))}
                                >
                                Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
            <button onClick={goToCheckout}>Checkout</button>

        </div>
    );
};

export default CartComponent;