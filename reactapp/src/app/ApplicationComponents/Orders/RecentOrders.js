import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders} from "../../State/Orders/OrderAction";
import OrderTable from "./OrderTable";


const RecentOrders = (props) => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const orders = useSelector((state) => state.orderReducer.orders); // get orders from redux-stpre
    const user = useSelector((state) => state.userReducer.user); // get store-user from redux

    // on mount, do this
    useEffect(() => {
        dispatch(fetchOrders(user._id));
    }, [dispatch, user._id]);

    return (
        <div>
            <h2>Your Orders</h2>
            {
                (!orders || orders.length === 0) ? (<p>you have no orders to view</p>) :
                (
                    orders.map((o, index) => (<OrderTable userId={user._id} order={o}/>))  
                )
            }
        </div>
    );
};

export default RecentOrders;