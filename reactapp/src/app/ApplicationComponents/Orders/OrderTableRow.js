import React from "react";
import ReviewModal from "../Reviews/ReviewModal";

let OrderTableRow = ({userId, product})=>{
    console.log("in ordertablerow, product._id " + product.productId)
    const refObj = product.productId
    return(
        <tr>
            <td>{product.qty}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td><ReviewModal userId={userId} refModel='product' refObj={product.productId}/></td>
        </tr>
    )

}

export default OrderTableRow;