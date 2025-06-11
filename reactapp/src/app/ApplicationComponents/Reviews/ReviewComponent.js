import React, { useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReviewTableRow from "./ReviewTableRow";
import { fetchReviews, fetchReviewsByObjId } from "../../State/Reviews/ReviewsAction";

const ReviewComponent = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const refModel = location.state?.refModel ?? undefined;
    const refObj = location.state?.refObj ?? undefined;

    console.log("refNodel" + refModel)
    console.log("refObj" + refObj)
    console.log({refObj})


    // const products = useSelector((state) => state.cartReducer.items); // get cart from redux
    const user = useSelector((state) => state.userReducer.user); // get user from redux
    const reviews = useSelector((state) => state.reviewsReducer.reviews);// get reviews from redux-store
    const userName = user?.userName ? user.userName : undefined;
    
    useEffect(() => {
        if (refObj) {
            dispatch(fetchReviewsByObjId(refObj))
        } else {
            dispatch(fetchReviews(user._id));
        }
    }, [dispatch, user._id, refObj]);

    return (
        <div className="reviews-container">
            <h3><strong>Reviews for: {(refObj) ?  refObj : userName}</strong></h3>
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