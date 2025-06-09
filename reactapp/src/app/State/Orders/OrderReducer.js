import * as ActionTypes from "../ActionTypes";

const Initial_State = {
    userId : "",
    orders : [] // list of product objects ordered and order date
    /**
     * orders will have definition of array of objects
     * {
     *  orderDate: Date
     *  cart: [
     *      {name, qty, ...}
     *  ]
     * }
     */
}

const orderReducer = (state = Initial_State, action) => {
    switch (action.type) {
      // update redux-store orderReducer data
      case ActionTypes.SET_ORDERS:
        return {
          ...state,
          userId: action.payload.userId,
          orders: action.payload.orders,
        };
  
      // delete orderReducer data from DB
      case ActionTypes.CLEAR_ORDERS:
        return {
            ...state,
            userId: "",
            orders:[]
        };
  
      default:
        return state;
    }
  };
  
  export default orderReducer;