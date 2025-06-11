import * as ActionTypes from "../ActionTypes";

const Initial_State = {
    reviews:[
      // userId,
      // refModel,
      // refId,
      // content
    ]
}

const reviewsReducer = (state = Initial_State, action) => {
    switch (action.type) {
      // update redux-store orderReducer data
      case ActionTypes.SET_REVIEWS:
        return {
          ...state,
          reviews: action.payload.reviews
        };
  
      // // delete orderReducer data from DB
      // case ActionTypes.CLEAR_ORDERS:
      //   return {
      //       ...state,
      //       userId: "",
      //       orders:[]
      //   };
  
      default:
        return state;
    }
  };
  
  export default reviewsReducer;