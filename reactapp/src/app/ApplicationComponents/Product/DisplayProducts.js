import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../State/Product/ProductAction";
import ProductItemComponent from "./ProductItemComponent";


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
        <h2>User Id [Mongo]: {user._id}</h2>
            {
                products && products.length > 0 ?
                products.map((productItem)=>{
                    return <ProductItemComponent product={productItem} key={productItem._id}/>
                })
                : <div><h4>No Products To Display</h4></div>
            }
        </>
    )
}

export default DisplayProducts;