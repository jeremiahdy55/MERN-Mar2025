import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { saveProduct } from "../../State/Product/ProductAction";
import DisplayProducts from "./DisplayProducts";
import ProductSave from "./ProductSave";

let ProductComponent = (props) => {

    
    let user = useSelector((state) => state.userReducer.user);
    let usrName = user && user.userName ? user.userName : "";

    return(
        <div className="col-md-12">
            {
                usrName === "admin" ? <ProductSave/> : <></>
            }
            <DisplayProducts />
        </div>
    )
}

export default ProductComponent;