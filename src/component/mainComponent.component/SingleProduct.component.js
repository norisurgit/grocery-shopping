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
    }
    return (
        props.products.map((e, i) => {
            const stars = []
            const fullStars = Math.floor(e.rating)
            const halfStars = Math.ceil(e.rating - fullStars)
            const emptyStars = 5 - fullStars - halfStars
            for (let i = 0; i < fullStars; i++) { stars.push(<span key={i} className="material-symbols-outlined">star</span>) } // paint full stars
            for (let i = 0; i < halfStars; i++) { stars.push(<span key={fullStars + i} className="material-symbols-outlined">star_half</span>) } // paint half stars
            for (let i = 0; i < emptyStars; i++) { stars.push(<span key={5 - i} className="material-symbols-outlined">grade</span>) } // paint empty stars
            return (
                <>
                    <div className='singleProductHolder' key={i}>
                        <div className='singleProductSingleColumn'>
                            <img
                                className='productImage'
                                alt={"bread"}
                                src={e.imgSrc}

                            />
                        </div>
                        <div className='singleProductSingleColumn'>
                            <div className='singleProductSubholderSingleLine'>
                                <div className='singleProductSingleColumn productTitle'>
                                    {e.title}
                                </div>
                                <div className='singleProductSingleColumn productRating'>
                                    {stars}
                                </div>
                            </div>
                            <div className='singleProductSubholderSingleLine'>
                                <div className='singleProductSingleColumn productDescription'>
                                    {e.description}
                                </div>
                                <div className='singleProductSingleColumn productPrice'>
                                    {`£${numberFn.roundAndShowTwoDecimals(e.price)}`}
                                </div>
                            </div>
                            <div className='singleProductSubholderSingleLine'>
                                <div className='singleProductSingleColumn emptyColumn'>
                                </div>
                                <div className='singleProductSingleColumn'>
                                    <button className='CTA' onClick={() => addToCart(e.id)}>
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        })

    )
}

export default SingleProductMarket