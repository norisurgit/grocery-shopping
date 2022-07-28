import React, { useEffect, useRef } from 'react'
import "./mainCart.component.style.css"
import "../../style/general.style.css"
import { useSelector } from 'react-redux'
import CartElement from '../cartElement.component/cartElement.component'
import pricingScenario from '../../functions/pricingMethods'
import * as productsData from "../../data/products"
import { roundAndShowTwoDecimals } from '../../functions/numbers.functions'
const Cart = (props) => {
    const cartMainHolder = useRef(null)
    const basketData = useSelector((state) => state.basket)
    const basketModified = new pricingScenario(basketData).checkScenario1().checkScenario2()
    const cartSubtotal = basketData.reduce((previous, current) => {
        return previous + (current.product > 0 ? productsData.filter(n => n.id === current.product)[0].price * current.quantity : 0)
    }, 0)
    const cartTotal = basketModified.reduce((previous, current) => {
        return previous + (current.wholePrice > 0 ? current.wholePrice : 0)
    }, 0)
    const cartDiscount = cartSubtotal - cartTotal
    useEffect(() => {
        if (props.isVisible) {
            cartMainHolder.current.className = "mainCartHolder visibleCart"
        } else {
            cartMainHolder.current.className = "mainCartHolder hiddenCart"
        }

    })

    return (
        <div className='mainCartHolder' ref={cartMainHolder}>
            <span className="material-symbols-outlined isButton title" onClick={props.changeCartVisibility}>
                close
            </span>
            <div className='cartElementsHolder'>
                <span className='title'>
                    cart
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                </span>
                {
                    basketData.map((e, i) => {
                        if (e.product === 0) return null
                        const data = basketModified.filter(n => n.product === e.product)[0]
                        return (
                            <CartElement modifiedBasketData={data} numbersData={e} key={i} />
                        )
                    })
                }
            </div>
            <div className='orderSummary'>

                <div className='oneFlex tabHolderLine'>
                    <span className='cartOptionsTitle'>Subtotal</span>
                    <span className='cartOptionsData'>{roundAndShowTwoDecimals(cartSubtotal)}</span>
                </div>
                <div className='oneFlex tabHolderLine'>
                    <span className='cartOptionsTitle'>Discount</span>
                    <span className='cartOptionsData'>{roundAndShowTwoDecimals(cartDiscount)}</span>
                </div>
                <div className='oneFlex tabHolderLine'>
                    <span className='cartOptionsTitle'>Total</span>
                    <span className='cartOptionsData'>{roundAndShowTwoDecimals(cartTotal)}</span>
                </div>
            </div>
        </div>
    )
}

export default Cart