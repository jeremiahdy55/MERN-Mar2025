import React, { useState } from "react";
import {saveCartItem} from "../../State/Cart/CartAction";
import { useSelector, useDispatch } from "react-redux";

let ProductItemComponent = ({product, userId})=>{

    let [showHide, toggleShowHide] = useState(false)
    let user = useSelector((state) => state.userReducer.user);


    let dispatch = useDispatch();

    //let dispatchToAddProduct = useDispatch();

    // let addItemToCart = (product)=>{
    //     dispatchToAddProduct(AddItemToCart(product))        
    // }

    return(
        <ul className="product col-md-11">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
           {product.name}
                {showHide ? 
                    <ul>
                    <li>Price: {product.price}</li>
                    <li>Description: {product.desc}</li>
                    <li>Rating: {product.rating}</li>
                    <li>Category: {product.category}</li> 
                    <li>Product _id: {product._id}</li>
                    {/* <li>{user._id}</li> */}
                    <button onClick={()=>dispatch(saveCartItem(user._id, product))} >Add Item</button>
                </ul>
                 : <div></div>} 
            </li>
        </ul>
    )

}

export default ProductItemComponent;