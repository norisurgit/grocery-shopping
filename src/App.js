import './App.css';
import './style/general.style.css'
import "./style/colorPalette.style.css"
import SingleProduct from './component/mainComponent.component/SingleProduct.component';
import Cart from './component/mainCart.component/mainCart.component';
import * as data from "./data/products"
import { useState } from 'react';
function App() {
    const [isVisible, setCartVisibility] = useState(false)
    const changeCartVisibility = () => {
        if (isVisible) {
            setCartVisibility(false)
        } else {
            setCartVisibility(true)
        }
    } // handles cart visibility (passed as props to skip redux )

    return (
        <div className="App">
            <div className='header'>
                <span className="material-symbols-outlined isButton" onClick={() => { changeCartVisibility() }}>
                    shopping_cart
                </span>
            </div>
            <div className='mainBody'>
                {data.map((e, i) => <SingleProduct product={e} key={i} />)}
            </div>
            <Cart isVisible={isVisible} changeCartVisibility={() => { changeCartVisibility() }} />
        </div>
    );
}

export default App;