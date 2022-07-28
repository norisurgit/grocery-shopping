import './App.css';
import './style/general.style.css'
import SingleProduct from './component/mainComponent.component/SingleProduct.component';
import Cart from './component/mainCart.component/mainCart.component';
import * as data from "./data/products"
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
function App() {
    const [isVisible, setCartVisibility] = useState(false)
    const currentBasket = useSelector((state) => state.basket)
    const basketIcon = useRef(null)
    const changeCartVisibility = () => {
        if (isVisible) {
            setCartVisibility(false)
        } else {
            setCartVisibility(true)
        }
    } // handles cart visibility (passed as props to skip redux )

    return (
        <div className="App">
            <Cart isVisible={isVisible} changeCartVisibility={changeCartVisibility} />
            <div className='header'>
                <span ref={basketIcon} className={`material-symbols-outlined isButton ${currentBasket.length > 1 ? "jiggle" : ""}`} onClick={() => { changeCartVisibility() }}>
                    {currentBasket.length === 1 ? "shopping_cart" : "production_quantity_limits"}
                </span>
            </div>
            <div className='mainBody'>
                <span className='title'>products</span>
                {data.map((e, i) => <SingleProduct product={e} key={i} />)}
            </div>
        </div>
    );
}

export default App;