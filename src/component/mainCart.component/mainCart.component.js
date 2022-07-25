import React, { useEffect, useRef } from 'react'
import "./mainCart.component.css"
import "../../style/general.style.css"
const Cart = (props) => {
    const cartMainHolder = useRef(null)
    useEffect(() => {
        console.log(props.isVisible);
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
        </div>
    )
}

export default Cart