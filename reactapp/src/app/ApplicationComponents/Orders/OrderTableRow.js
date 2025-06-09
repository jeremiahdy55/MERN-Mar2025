import React from "react";

let OrderTableRow = ({product})=>{

    return(
        <tr>
            <td>{product.qty}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )

}

export default OrderTableRow;