import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCoupon } from "../../State/Coupon/CouponAction";
import GenerateCoupon from "./GenerateCoupon";

const CouponComponent = (props) => {
    const coupon = useSelector((state) => state.couponReducer.couponId); // get store-coupoun from redux
    // const dispatch = useDispatch();

    // // let generateCoupon = (evt) => {
    // //     dispatch(setCoupon(user._id, products))
    // //     navigate("/checkout");
    // //     evt.preventDefault();
    // // }

    return (
        <div className="cart-container">
            <h2>Your Coupon</h2>
            {(!coupon) ? (
                <p>Coupon not generated</p>
            ) : (
                <h4>Coupon ID: {coupon}</h4>
            )}
            {/* <button onClick={goToCheckout}>Checkout</button> */}
            <GenerateCoupon />

        </div>
    );
};

export default CouponComponent;