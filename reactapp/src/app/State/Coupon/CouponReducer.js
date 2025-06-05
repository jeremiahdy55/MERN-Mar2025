import * as ActionTypes from "../ActionTypes";

const Initial_State = {
    couponId : ""
}

const couponReducer = (state = Initial_State, action) => {
    switch (action.type) {
      // update redux-stor cartReducer data
      case ActionTypes.SET_COUPON:
        return {
          ...state,
          couponId: action.payload.couponId
        };
  
      default:
        return state;
    }
  };
  
  export default couponReducer;