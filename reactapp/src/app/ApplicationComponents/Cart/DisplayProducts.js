import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../State/Product/ProductAction";
import CartItemComponent from "./CartItemComponent";


let DisplayProducts = ()=>{

    let products = useSelector((state)=>state.productReducer.Products)
    let user = useSelector((state) => state.userReducer.user);


    let dispatchToFetchProduct = useDispatch();

    console.log(products)

    //component did mount
    useEffect(()=>{
        products && products.length == 0 ? dispatchToFetchProduct(fetchProducts()) : []
    },[])

    return(
        <>
        <h2>Don't forget to save your items before leaving!</h2>
            {
                products && products.length > 0 ?
                products.map((productItem)=>{
                    return <CartItemComponent product={productItem} key={productItem._id}/>
                })
                : <div><h4>No Products To Display</h4></div>
            }
        </>
    )
}

export default DisplayProducts;