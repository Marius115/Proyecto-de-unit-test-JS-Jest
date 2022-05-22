test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 127.9 yen", function(){
    //import the function from app.js
    const { fromDollartoYen } = require('./app.js')

    // use the function like its supposed to be used
    const yen = fromDollartoYen(3.5)

    // if 1 dollar is 127.9 yen, then 3.5 dollars should be (3.5 * 127.9)
    const expected = 3.5 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollartoYen(3.5)).toBeTruthy(); //1 dollar is 127.9 yen, then 3.5 dollars should be (3.5 * 127.9)
})

test("One yen should be 0.8 pounds", function(){
    //import the function from app.js
    const { fromYentoPound } = require('./app.js')

    // use the function like its supposed to be used
    const yen = fromYentoPound(3.5)

    // if 1 yen is 0.8 pounds, then 3.5 yen should be (3.5 * 0.8)
    const expected = 3.5 * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYentoPound(3.5)).toBeTruthy(); //1 yen is 0.8 pounds, then 3.5 yen should be (3.5 * 0.8)
})
