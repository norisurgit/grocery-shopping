const roundAndShowTwoDecimals = (price) => {
    return (
        Math.round(price * 100) % 100 === 0 ? `${Math.round(price * 100) / 100}.00` // price x.00
            : Math.round(price * 100) % 10 === 0 ? `${Math.round(price * 100) / 100}0` : // price is x.y0
                Math.round(price * 100) / 100 // price is x.yz
    )
}

module.exports = {
    roundAndShowTwoDecimals
}