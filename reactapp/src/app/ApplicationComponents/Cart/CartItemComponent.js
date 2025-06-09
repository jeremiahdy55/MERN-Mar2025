import React, { useState } from "react";
import {saveItemToStoreCart} from "../../State/Cart/CartAction";
import { useSelector, useDispatch } from "react-redux";

let CartItemComponent = ({product, userId})=>{

    let [showHide, toggleShowHide] = useState(false)
    let user = useSelector((state) => state.userReducer.user);


    let dispatch = useDispatch();

    //let dispatchToAddProduct = useDispatch();

    // let addItemToCart = (product)=>{
    //     dispatchToAddProduct(AddItemToCart(product))        
    // }

    return(
        <ul className="product col-md-11">
        <li className="product">
           {product.name}
                    <ul>
                    <li>Price: {product.price}</li>
                    <li>Description: {product.desc}</li>
                    <li>Rating: {product.rating}</li>
                    <li>Category: {product.category}</li> 
                    {/* <li>{product._id}</li>
                    <li>{user._id}</li> */}
                    <button onClick={()=>dispatch(saveItemToStoreCart(user._id, product))} >Add Item</button>
                </ul>
            </li>
        </ul>
    )

}

export default CartItemComponent;