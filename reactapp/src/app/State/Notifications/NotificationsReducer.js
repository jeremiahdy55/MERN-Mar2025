import * as ActionTypes from "../ActionTypes";

const Initial_State = {
    userId: "",
    notifications: []
}

const notificationsReducer = (state = Initial_State, action) => {
    switch (action.type) {
      // update redux-store notificationsReducer data
      case ActionTypes.SET_NOTIFICATIONS:
        return {
          ...state,
          userId: action.payload.userId,
          notifications: action.payload.notifications.map(n => ({ ...n }))
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
  
  export default notificationsReducer;