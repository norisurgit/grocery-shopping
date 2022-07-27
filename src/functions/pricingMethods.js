import * as productsData from "../data/products"
class pricingScenario {
    constructor(basket) {
        this.basket = basket // [{product:x, quantity: y}]
        this.newBasketAndPrices = []
        this.breadHalfPrice = { isTrue: false, quantity: 0 } // will store if scenario1 is true, and how much products will accept deduction
        this.milkReduction = { isTrue: false, quantity: 0 }
    }
    checkScenario1() {
        this.newBasketAndPrices = this.basket.map((e, i) => {
            const unitPrice = productsData.filter(n => n.id === e.product)[0]?.price
            return {
                product: e.product,
                quantity: e.quantity,
                singlePrice: unitPrice,
                wholePrice: e.quantity * unitPrice
            }
        })// return new object with prices
        this.breadHalfPrice.isTrue = this.basket.filter(n => n.product === 3)[0]?.quantity > 1 ? true : false // 50% bread condition
        this.breadHalfPrice.quantity = this.breadHalfPrice.isTrue ? Math.floor(this.basket.filter(n => n.product === 3)[0].quantity / 2) : 0 // 50% bread condition (bread quantity )
        this.newBasketAndPrices = this.newBasketAndPrices.map((e, i) => {
            if (e.product === 1 && this.breadHalfPrice.isTrue && e.quantity > 0) {
                const newSinglePrice = e.singlePrice / 2
                const newWholePrice = (
                    (
                        (this.breadHalfPrice.quantity > e.quantity ? e.quantity : this.breadHalfPrice.quantity) // which ever is smaller, basket quantity of reduction quantity
                        * e.singlePrice
                    ) / 2) + (
                        (e.quantity - this.breadHalfPrice.quantity > 0 ? e.quantity - this.breadHalfPrice.quantity : 0) // if basket quantity is larger than reduction quantity or 0
                        * e.singlePrice)
                return {
                    product: e.product,
                    quantity: e.quantity,
                    singlePrice: newSinglePrice,
                    wholePrice: newWholePrice
                }
            }
            else {
                return e
            }
        })
        return this
    }
    checkScenario2() {
        this.milkReduction.isTrue = this.basket.filter(n => n.product === 2)[0]?.quantity > 3 ? true : false
        this.milkReduction.quantity = this.milkReduction.isTrue ? Math.floor(this.basket.filter(n => n.product === 2)[0].quantity / 4) : 0
        if (this.milkReduction.isTrue) {
            this.newBasketAndPrices = this.newBasketAndPrices.map((e, i) => {
                if (e.product === 2) {
                    return {
                        product: e.product,
                        quantity: e.quantity,
                        singlePrice: e.singlePrice,
                        wholePrice: (e.quantity - this.milkReduction.quantity) * e.singlePrice
                    }
                } else { return e }
            })
        }
        return this.newBasketAndPrices
    }
}

export default pricingScenario