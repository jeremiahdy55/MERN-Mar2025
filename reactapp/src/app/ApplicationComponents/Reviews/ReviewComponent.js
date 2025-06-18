import React, { useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReviewTableRow from "./ReviewTableRow";
import { fetchReviews, fetchReviewsByObjId } from "../../State/Reviews/ReviewsAction";

const ReviewComponent = (props) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const refModel = location.state?.refModel ?? localStorage.getItem("refModel");
    const refObj = location.state?.refObj ?? JSON.parse(localStorage.getItem("refObj"));

    console.log("refNodel" + refModel)
    console.log("refObj" + refObj)
    console.log({refObj})


    // const products = useSelector((state) => state.cartReducer.items); // get cart from redux
    const user = useSelector((state) => state.userReducer.user); // get user from redux
    const reviews = useSelector((state) => state.reviewsReducer.reviews);// get reviews from redux-store
    const userName = user?.userName ? user.userName : undefined;
    const refObjName = reviews?.[0]?.refObj?.name ? reviews[0].refObj.name : undefined;
    const refObjOrderDate = reviews?.[0]?.refObj?.orderDate ? reviews[0].refObj.orderDate : undefined;

    // If the refObjName exists, then this is loaded for product, and show product name
    // If the refObjOrderDate exists, then this is loaded for order, and show order date
    // If neither, then this gets the default value of both, which is undefined
    const refObjPageHeader = (refObjName) ? refObjName : refObjOrderDate;

    // Set the values if they exist
    // emulates componentDidUpdate()
    useEffect(() => {
        if (location.state?.refModel && location.state?.refObj) {
            localStorage.setItem("refModel", location.state.refModel);
            localStorage.setItem("refObj", JSON.stringify(location.state.refObj));
        }
    }, [location.state]);

    // emulates componentDidUpdate()
    useEffect(() => {
        if (refModel && refObj) {
            console.log("hit fetchReviewsByObjId")
            dispatch(fetchReviewsByObjId(refObj))
        } else {
            console.log("hit fetchReviewsByUserId")
            dispatch(fetchReviews(user._id));
        }
    }, [dispatch, refObj]);

    // Emulate componentDidUnmount()
    useEffect(() => {
        const handleUnload = () => {
            localStorage.removeItem("refModel");
            localStorage.removeItem("refObj");
        };
    
        window.addEventListener("beforeunload", handleUnload);
    
        return () => {
            // Fires on component unmount (e.g., navigation within SPA)
            handleUnload();
            window.removeEventListener("beforeunload", handleUnload);
        };
    }, []);

    return (
        <div className="reviews-container">
            <h3><strong>Reviews for: {(refObj && reviews && reviews.length > 0 && refObjPageHeader) ?  refObjPageHeader: userName}</strong></h3>
            {
                reviews && reviews.length > 0 ?
                    (<div><table>
                        <thead>
                            <tr>
                                <th>Reviewed Object</th>
                                <th>Name</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map((review) => {
                                return <ReviewTableRow content={review.content} refObj={review.refObj} refModel={review.refModel} key={review._id}/>
                                
                                // return <SummaryTableRow product={productItem} key={productItem._id} />
                                // double map here
                            })}
                        </tbody>
                    </table>
                    </div>
                    )
                    : (<div><h4>No Reviews To Display</h4></div>)
            }
        </div>
    );
};

export default ReviewComponent;