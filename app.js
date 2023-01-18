// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollars) => {
    // 1.2 dollar = 127.9 yen
    // 1 dollar = 106.6
    return dollars * 106.6;
}


const fromEuroToDollar = (euros) => {
    return euros * 1.2;
}

const fromYenToPound = (yens) => {
    // 127.9 yen = 0.8 pound
    // 1 yen = 0.006
    return yens * 0.006;
}

console.log(fromDollarToYen(55))
console.log(fromEuroToDollar(3.5))
console.log(fromYenToPound(1250))

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}