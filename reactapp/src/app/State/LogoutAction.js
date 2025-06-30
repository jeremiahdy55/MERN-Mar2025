import { clearCart } from "./Cart/CartAction";
import { setCoupon } from "./Coupon/CouponAction";
import { setNotifications } from "./Notifications/NotificationsAction";
import { clearOrders } from "./Orders/OrderAction";
import { AddUserToStore } from "./User/UserAction";

export const logoutUser = () => {
    return function (dispatch) {
        dispatch(clearCart());
        dispatch(setCoupon(""));
        dispatch(setNotifications("", []));
        dispatch(clearOrders());
        dispatch(AddUserToStore({username:"", password:"", street:"", mobile:""}));
    };
};