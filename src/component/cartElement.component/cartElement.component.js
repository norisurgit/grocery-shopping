import React from "react";
import "./cartElement.component.style.css"
import QuantityAndHandlers from "../quantityAndHandles.component/quantityAndHandlers.component";
import * as productsData from "../../data/products"
import { roundAndShowTwoDecimals } from "../../functions/numbers.functions";
const CartElement = (props) => {
    const productData = productsData.filter(n => n.id === props.numbersData.product)[0]
    return (
        <div className="mainElement">
            <div className="childElement oneFlex">
                <img src={productData.imgSrc} alt="hey" className="productCartImage" />
            </div>
            <div className="childElement twoFlex titleAndQuantity" >
                <div className=" oneFlex">
                    {productData.title}
                </div>
                <div className="oneFlex">
                    <QuantityAndHandlers data={props.numbersData} />
                </div>
            </div>
            <div className="childElement oneFlex">
                <div className="oneFlex oldPrice">

                    {
                        productData.price * props.numbersData.quantity > props.modifiedBasketData.wholePrice ?
                            roundAndShowTwoDecimals(productData.price * props.numbersData.quantity)
                            : ""}
                </div>
                <div className="oneFlex newPrice">
                    {
                        props.modifiedBasketData.wholePrice < productData.price * props.numbersData.quantity ?
                            roundAndShowTwoDecimals(props.modifiedBasketData.wholePrice)
                            : roundAndShowTwoDecimals(productData.price * props.numbersData.quantity)
                    }
                </div>
            </div>
        </div>
    )
}

export default CartElement