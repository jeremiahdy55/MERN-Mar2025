import * as ActionTypes from "../ActionTypes";
import axios from "axios";

// Action to set the state of the orderReducer in redux-store
export const setReviews = (reviews) => ({
  type: ActionTypes.SET_REVIEWS,
  payload: { reviews }
});

export const fetchReviews = (userId) => {
  return function (dispatch) {
      axios.get(`http://localhost:9000/reviews/api/${userId}`)
        .then((response) => {
          const reviewData = response.data;
          if (reviewData) {            
              const reviewsData = response.data;
              const reviews = [];
              console.log({reviewsData})
              for (const review of reviewsData) {
                  reviews.push({
                  _id: review._id, 
                  userId: review.userId, 
                  refModel: review.refModel, 
                  refObj: review.refObj, 
                  content: review.content});
              }

              dispatch(setReviews(reviews));
            } else {
              // If no response, clear redux-store of any orders data
              dispatch(clearOrders());
            }
        })
        .catch((err)=>{
            console.log("Error While Fetching Reviews by User ID", err)
        });
  };
};

export const fetchReviewsByObjId = (refObj) => {
  console.log(refObj)
  return function (dispatch) {
      axios.get(`http://localhost:9000/reviews/api/getReviewByObjId/${refObj}`)
        .then((response) => {
          const reviewData = response.data;
          if (reviewData) {            
              const reviewsData = response.data;
              const reviews = [];
              for (const review of reviewsData) {
                reviews.push({
                  _id: review._id, 
                  userId: review.userId, 
                  refModel: review.refModel, 
                  refObj: review.refObj, 
                  content: review.content});
              }
              dispatch(setReviews(reviews));
            } else {
              // If no response, clear redux-store of any orders data
              dispatch(setReviews([]));
            }
        })
        .catch((err)=>{
            console.log("Error While Fetching Reviews by User ID", err)
        });
  };
};

export const saveReview = (userId, refModel, refObj, content) => {
  return function (dispatch) {
    axios.post(`http://localhost:9000/reviews/api/saveReview`, {
        userId,
        refModel,
        refObj,
        content
      })
      .then((response) => {
        const reviewsData = response.data;
        const reviews = [];
        for (const review of reviewsData) {
            reviews.push({
              _id: review._id, 
              userId: review.userId, 
              refModel: review.refModel, 
              refObj: review.refObj, 
              content: review.content});
        }
        dispatch(setReviews(reviews));
      })
      .catch((error) => {
        console.error("Error saving and retrieving orders:", error);
      });
}}