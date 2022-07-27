import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import "./quantityAndHandlers.component.css"
const QuantityAndHandlers = (props) => {
    // +/- button will dispatch state change
    const quantityDispatcher = useDispatch()
    return (
        <div className='parentHolder'>
            <div className='actionButton substract'
                onClick={() => quantityDispatcher({
                    type: "QNT_CHANGE_LESS",
                    payload: { productID: props.data.product }
                })
                }
            >
                -
            </div>
            <div className='quanity'>
                {props.data.quantity}
            </div>
            <div className='actionButton add'
                onClick={() => quantityDispatcher({
                    type: "QNT_CHANGE_MORE",
                    payload: { productID: props.data.product }
                }
                )}
            >
                +
            </div>
        </div>
    )

}

export default QuantityAndHandlers