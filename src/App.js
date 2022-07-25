import './App.css';
import './style/general.style.css'
import SingleProduct from './component/mainComponent.component/SingleProduct.component';
import Cart from './component/mainCart.component/mainCart.component';
import * as data from "./data/products"
import { useState } from 'react';
import { useSelector } from "react-redux"
function App() {
    const [isVisible, setCartVisibility] = useState(false)
    const changeCartVisibility = () => {
        console.log(isVisible);
        if (isVisible) {
            setCartVisibility(false)
        } else {
            setCartVisibility(true)
        }
    }

    const currentCart = useSelector((state) => state.basket)
    console.log(currentCart);
    return (
        <div className="App">
            <div className='header'>
                <span className="material-symbols-outlined isButton" onClick={() => {
                    changeCartVisibility()
                }}>
                    shopping_cart
                </span>
            </div>
            <div className='mainBody'>
                <SingleProduct products={data} />
            </div>
            <Cart isVisible={isVisible}
                changeCartVisibility={() => {
                    changeCartVisibility()
                }}
                currentCart={currentCart}
            />
        </div>
    );
}

export default App;