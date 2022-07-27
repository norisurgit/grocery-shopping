import React, { useEffect, useRef } from 'react'
import "./mainCart.component.css"
import "../../style/general.style.css"
import { useSelector } from 'react-redux'
import CartElement from '../cartElement.component/cartElement.component'

const Cart = (props) => {
    const cartMainHolder = useRef(null)
    const basketData = useSelector((state) => state.basket)
    useEffect(() => {
        if (props.isVisible) {
            cartMainHolder.current.className = "mainCartHolder visibleCart"
        } else {

            cartMainHolder.current.className = "mainCartHolder hiddenCart"
        }
    })
    return (
        <div className='mainCartHolder' ref={cartMainHolder}>
            <span className="material-symbols-outlined isButton" onClick={props.changeCartVisibility}>
                close
            </span>
            <div className='cartElementsHolder'>
                {
                    basketData.map((e, i) => {
                        if (e.product === 0) return null
                        return (
                            <CartElement numbersData={e} key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart