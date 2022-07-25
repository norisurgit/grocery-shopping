import React, { useState } from 'react'
import "./quantityAndHandlers.component.css"
const QuantityAndHandlers = (props) => {
    // requires prop : quantity
    const [quantity, setQuantity] = useState(props.quantity)
    return (
        <div className='parentHolder'>
            <div className='actionButton substract'
                onClick={() => setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1)}
            >
                -
            </div>
            <div className='quanity'>
                {quantity}
            </div>
            <div className='actionButton add'
                onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}
            >
                +
            </div>
        </div>
    )

}

export default QuantityAndHandlers