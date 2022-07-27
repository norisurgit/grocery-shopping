import React from "react";
import "./cartElement.component.style.css"
import QuantityAndHandlers from "../quantityAndHandles.component/quantityAndHandlers.component";

const CartElement = (props) => {
    return (
        <div className="mainElement">
            <QuantityAndHandlers data={props.numbersData} />
        </div>
    )
}

export default CartElement