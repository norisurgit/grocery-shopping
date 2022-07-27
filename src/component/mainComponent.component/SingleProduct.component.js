import React from 'react'
import "./SingleProduct.component.css"
import * as numberFn from "../../functions/numbers.functions"
import { useDispatch } from "react-redux"

const SingleProductMarket = (props) => {
    const productDispatcher = useDispatch()
    const addToCart = (productID) => {
        productDispatcher({
            type: "ADD",
            payload: productID
        })
        window.alert(`${props.product.title} ajouté au panier`)
    }
    const stars = []
    const fullStars = Math.floor(props.product.rating)
    const halfStars = Math.ceil(props.product.rating - fullStars)
    const emptyStars = 5 - fullStars - halfStars
    for (let i = 0; i < fullStars; i++) { stars.push(<span key={i} className="material-symbols-outlined">star</span>) } // paint full stars
    for (let i = 0; i < halfStars; i++) { stars.push(<span key={fullStars + i} className="material-symbols-outlined">star_half</span>) } // paint half stars
    for (let i = 0; i < emptyStars; i++) { stars.push(<span key={fullStars + halfStars + i} className="material-symbols-outlined">grade</span>) } // paint empty stars
    return (

        <div className='singleProductHolder'>
            <div className='singleProductSingleColumn'>
                <img
                    className='productImage'
                    alt={"bread"}
                    src={props.product.imgSrc}

                />
            </div>
            <div className='singleProductSingleColumn'>
                <div className='singleProductSubholderSingleLine'>
                    <div className='singleProductSingleColumn productTitle'>
                        {props.product.title}
                    </div>
                    <div className='singleProductSingleColumn productRating'>
                        {stars}
                    </div>
                </div>
                <div className='singleProductSubholderSingleLine'>
                    <div className='singleProductSingleColumn productDescription'>
                        {props.product.description}
                    </div>
                    <div className='singleProductSingleColumn productPrice'>
                        {`£${numberFn.roundAndShowTwoDecimals(props.product.price)}`}
                    </div>
                </div>
                <div className='singleProductSubholderSingleLine'>
                    <div className='singleProductSingleColumn emptyColumn'>
                    </div>
                    <div className='singleProductSingleColumn'>
                        <button className='CTA' onClick={() => addToCart(props.product.id)}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductMarket