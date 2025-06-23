import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteNotification } from "../../State/Notifications/NotificationsAction";

let NotificationRow = ({userId, notification})=>{
    console.log(notification)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Clone the object to prevent Redux-mutate errors
    const localNotification = React.useMemo(() => ({ ...notification }), [notification]);

    // Define custom style for notifications
    const styles = {
        static: {
            padding: '10px',
            borderBottom: '1px solid #eee',
            fontSize: '14px',
            color: '#333',
        },
        dynamic: {
            padding: '10px',
            borderBottom: '1px solid #eee',
            fontSize: '14px',
            color: '#333',
            fontWeight: "bold"
        },
    };

    // define callback function to navigate to the location
    let navigateToLocation = (evt) => {
        navigate(localNotification.navigateTo);
        evt.preventDefault();
    }

    let navigateToLocationAndDeleteDynamicNotif = (evt) => {
        dispatch(deleteNotification(userId, localNotification._id));
        navigate(localNotification.navigateTo);
        evt.preventDefault();
    }

    return (
        (notification.type === 'dynamic' ?
            <div style={styles.dynamic} onClick={navigateToLocationAndDeleteDynamicNotif}>{localNotification.content}</div>
            :
            <div style={styles.static} onClick={navigateToLocation}>{localNotification.content}</div>
        )
    )

}

export default NotificationRow;