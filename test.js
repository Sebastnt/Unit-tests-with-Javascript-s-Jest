// import the functions from the app.js file
const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

// start your first test    
test('55 dollars equal to 5863 yen', () => {
    let total = fromDollarToYen(55);
    expect(total).toBe(5863);
});

test('3.5 euro equal to 4.2 dolar', () => {
    let total = fromEuroToDollar(3.5);
    expect(total).toBe(4.2);
});

test('1250 yen equal to 7.5 pound', () => {
    let total = fromYenToPound(1250);
    expect(total).toBe(7.5);
});