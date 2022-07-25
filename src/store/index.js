import { createStore } from "redux";

const basketReducer = (state = { basket: [{ product: 0, quantity: 0 }] }, action) => {
    if (action.type === "ADD") {
        const newObj = { product: action.payload, quantity: 1 }
        let isExistant = false
        state.basket.forEach((e, i) => {
            console.log(action.payload);
            if (e.product === action.payload) isExistant = true
        })
        if (!isExistant) {
            return {
                basket: [...state.basket, newObj]
            }
        } else {
            return { basket: [...state.basket] }
        }
    } else {
        return { basket: [...state.basket] }
    }
}

const basketStore = createStore(basketReducer)

export default basketStore