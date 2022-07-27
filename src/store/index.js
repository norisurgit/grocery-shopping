import { createStore } from "redux";
class basketModifier {
    constructor(productID, currentState) {
        this.productID = productID
        this.currentState = currentState
    }
    introduceToStore() {
        const newObj = { product: this.productID, quantity: 1 }
        let isExistant = false
        this.currentState.forEach((e, i) => {
            if (e.product === this.productID) isExistant = true
        })
        if (!isExistant) {
            return [...this.currentState, newObj].filter(n => n.quantity > 0)

        } else {
            return [...this.currentState].filter(n => n.quantity > 0)
        }
    }
    addToQuantity() {
        const newObj = this.currentState.map((e, i) => {
            if (e.product === this.productID) {
                return { product: e.product, quantity: e.quantity + 1 }
            }
            else {
                return e
            }
        })
        return newObj
    }
    removeFromQuantity() {
        const newObj = this.currentState.map((e, i) => {
            if (e.product === this.productID && e.quantity > 0) {
                return { product: e.product, quantity: e.quantity - 1 }
            }
            else {
                return e
            }
        })
        return newObj.filter(n => n.quantity > 0)

    }
}
const basketReducer = (state = { basket: [{ product: 0, quantity: 1 }] }, action) => {
    if (action.type === "ADD") {

        return { basket: new basketModifier(action.payload, state.basket).introduceToStore() }
    }
    if (action.type === "QNT_CHANGE_MORE") {
        return { basket: new basketModifier(action.payload.productID, state.basket).addToQuantity() }
    }
    if (action.type === "QNT_CHANGE_LESS") {
        return { basket: new basketModifier(action.payload.productID, state.basket).removeFromQuantity() }
    }
    else {
        return { basket: [...state.basket].filter(n => n.quantity > 0) }
    }
}

const basketStore = createStore(basketReducer)

export default basketStore