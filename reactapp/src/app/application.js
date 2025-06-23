import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import Footer from "./CommonComponents/FooterComponent";
import Header from "./CommonComponents/HeaderComponent";
import Home from "./CommonComponents/HomeComponent";
import NotFound from "./CommonComponents/NotFoundComponent";
import About from "./CommonComponents/AboutComponent.jsx";
import ComponentTypes from "./CommonComponents/ComponentTypes.js";
//import UserComponent from "./ApplicationComponents/User/UserComponent.jsx";
import UserComponent from "./ApplicationComponents/User/UserContainer.js";
import UserHookComponent from "./ApplicationComponents/User/UserHooksComponent.js";
import ProductComponent from "./ApplicationComponents/Product/ProductComponent.js";
import CartComponent from "./ApplicationComponents/Cart/CartComponent.js";
import CheckoutComponent from "./ApplicationComponents/Checkout/CheckoutComponent.js";
import CouponComponent from "./ApplicationComponents/Coupon/CouponComponent.js";
import RecentOrders from "./ApplicationComponents/Orders/RecentOrders.js";
import ReviewComponent from "./ApplicationComponents/Reviews/ReviewComponent.js";
import NotificationButton from "./ApplicationComponents/Notification/NotificationButton.js";

export default class ApplicationComponent extends Component {

    /**
     *
     */
    constructor(props) {
        super();
        this.state = {
            userName : "react user ",
            user : {
                    userName : "Test User",
                    userAge : 19
                    }
        }
        this.sessionName = "MERNStack - React Props"
    }

    changeUserNameEvent = (userName)=>{

        //this.state.userName = "Tejasvi" //with this way render method will not be called and no new virtual dom will be created

        //we have registered API (callback) from react to make state changes and call render method
        //so that new virtual dom gets created

        this.setState({
            userName : userName
            //userAddress : "Somewhere on earth!!!!!!"
        })

        //updating the state using force update - not recommended but can be used if needed

        // this.state.userName = `Dat -  
        //         This is coming from Application Component
        //         This is coming from Application Component

        //         This is coming from Application Component

        //         This is coming from Application Component`

        // this.forceUpdate()//it will directly call the render method and will skip life cycle methods such as shouldComponentUpdate

        //this.sessionName = "The session is on react and state and its virtual dom coupling!!!"
        console.log(this.state.userName)//not updated immediately as - the change is done via callback and as soon as callback 
        // returns value the log line is passed already executed

        //alert("User Name is updated!!")

        evt.preventDefault();
    }


    render(){
        
        console.log("Render method is called!!")
        return( //vitual dom or jsx code (javascript like xml structure)
            <Router>                
                <div className="topdiv">
                    <Header />
                        <Routes>
                            <Route path="/" element={<Home user={this.state.user} />}/>
                            <Route path="home" element={<Home user={this.state.user} />}/>
                            <Route path="user" element={<UserComponent />}/>
                            <Route path="userhook" element={<UserHookComponent />}/>
                            <Route path="product" element={<ProductComponent />}/>
                            <Route path="cart" element={<CartComponent />}/>
                            <Route path="checkout" element={<CheckoutComponent />}/>
                            <Route path="payment" element={<CheckoutComponent />}/>
                            <Route path="coupon" element={<CouponComponent />}/>
                            <Route path="orders" element={<RecentOrders />}/>
                            <Route path="reviews" element={<ReviewComponent />}/>




                            {/* <Route path="comp" element={<ComponentTypes />}/> */}
                            <Route path="about" element={<About />}/>
                            {/* <Route path="about/:id" element={<About />}/> */}
                            {/* <Route path="about/:id/:name" element={<About />}/> */}
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    <Footer sessionName={this.sessionName}/>
                </div>    
            </Router>      
        )
    }
}