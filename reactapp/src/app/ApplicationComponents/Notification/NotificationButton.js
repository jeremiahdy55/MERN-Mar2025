import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import NotificationRow from './NotificationRow';
import { fetchNotifications } from '../../State/Notifications/NotificationsAction';

const NotificationButton = (props) => {
    const dispatch = useDispatch()
    // remove these later with dynamic values from redux store
    const staticNotifications = [
        {content: "Add Product from Products Page", navigateTo: "/product", type: "static"},
        {content: "Add Item from Cart Page", navigateTo: "/cart", type: "static"},
        {content: "Review Cart or make Payment from Checkout Page", navigateTo: "/checkout", type: "static"},
        {content: "Cancel or Reorder from Orders Page", navigateTo: "/orders", type: "static"},
        {content: "See your Reviews on Reviews Page", navigateTo: "/orders", type: "static"}
    ];
    const reduxNotifications = useSelector((state) => state.notificationsReducer.notifications);

    // reverse the notifications that come from MongoDB -> Redux Store -> HERE
    // this is to provide the most recent notification at the top of the list
    const reversedReduxNotifications = [...reduxNotifications].reverse();

    const user = useSelector((state) => state.userReducer.user);
    const notifications = [ ...reversedReduxNotifications, ...staticNotifications];
    const count = reduxNotifications.length;
    console.log("reduxNotifications")
    console.log({reduxNotifications})


    // fetch notifications, use React.memo to update notification button conditionally
    useEffect(() => {
        dispatch(fetchNotifications(user._id));
    }, [dispatch, user._id]);

    //// Handle the notification open/close functionality ////
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    //// END: Handle the notification open/close functionality ////

  
    return (
      <div style={styles.container} ref={dropdownRef}>
        {!open && (<button style={styles.button} onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faBell} />
          {count > 0 && <span style={styles.badge}>{count > 99 ? '99+' : count}</span>}
        </button>)}
  
        {open && (
          <div style={styles.dropdown}>
            {notifications.length === 0 ? (
              <div style={styles.empty}>No notifications</div>
            ) : (
              notifications.map((notifObj, idx) => (
                <NotificationRow key={idx} notification={notifObj} userId={user._id}/>
              ))
            )}
          </div>
        )}
      </div>
    );
  };

// Overwrite any other styles and use these instead
// referenced using inline style={style.####}
const styles = {
    container: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 9999,
    },
    button: {
      position: 'relative',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      fontSize: '20px',
      cursor: 'pointer',
    },
    badge: {
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      backgroundColor: 'red',
      color: 'white',
      borderRadius: '50%',
      padding: '3px 6px',
      fontSize: '12px',
    },
    dropdown: {
      marginTop: '10px',
      width: '300px',
      backgroundColor: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      maxHeight: '700px',
      overflowY: 'auto',
    },
    empty: {
      padding: '15px',
      textAlign: 'center',
      color: '#666',
      fontStyle: 'italic',
    },
};
  
  export default React.memo(NotificationButton);