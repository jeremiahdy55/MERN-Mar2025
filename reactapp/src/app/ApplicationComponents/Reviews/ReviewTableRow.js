import React from "react";

let ReviewTableRow = ({content, refObj, refModel})=>{
    const name = (refModel === "orders") ? refObj.orderDate : refObj.name;

    return (
        <tr>
            <td>{refModel}</td>
            <td>{name}</td>
            <td>{content}</td>
        </tr>
    )

}

export default ReviewTableRow;