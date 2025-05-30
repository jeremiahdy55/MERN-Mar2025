import * as ActionTypes from "../ActionTypes";

const Initial_State = {
    userId : "",
    items : []
}

const cartReducer = (state = Initial_State, action) => {
    switch (action.type) {
      // update redux-stor cartReducer data
      case ActionTypes.SET_CART:
        return {
          ...state,
          userId: action.payload.userId,
          items: action.payload.items
        };
  
      // reset redux-store cartReducer data
      case ActionTypes.CLEAR_CART:
        return {
          ...state,
          items: [],
          userId: ""
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;