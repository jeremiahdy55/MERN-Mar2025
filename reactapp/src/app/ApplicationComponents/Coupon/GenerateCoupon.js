import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveCouponToStore } from "../../State/Coupon/CouponAction";

let GenerateCoupon = ()=>{

    // let products = useSelector((state)=>state.productReducer.Products)
    // let user = useSelector((state) => state.userReducer.user);


    let dispatch = useDispatch();

    let generateCoupon = (evt) => {
        let couponId = Math.floor((Math.random() * 999999) + 1);
        let sixDigitCouponId = String(couponId).padStart(6, '0');
        console.log(sixDigitCouponId)
        dispatch(saveCouponToStore(sixDigitCouponId))
        evt.preventDefault();
    }

    // //component did mount
    // useEffect(()=>{
    //     products && products.length == 0 ? dispatchToFetchProduct(fetchProducts()) : []
    // },[])

    return(
        <>
        <button class="btn-warning" onClick={generateCoupon}>Generate a coupon</button>
        </>
    )
}

export default GenerateCoupon;