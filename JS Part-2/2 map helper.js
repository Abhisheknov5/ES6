console.log("2 map helper");

// Map Header
const numbers = [1, 2, 3, 4, 5];
let squaredNumbers = [];

// Without `map()`
for (let i=0; i<numbers.length; i++) {
    squaredNumbers.push (numbers[i]*numbers[i]);
}
console.log ('Without map: ', squaredNumbers);

// With `map()`, without arrow function
let squaredNumbers2 = numbers.map (function (number) {
    return number*number;
});
console.log ('With map, without arrow function', squaredNumbers2);

// With `map()`, with arrow function
let squaredNumbers3 = numbers.map (number => number*number);
console.log ('With map, with arrow function', squaredNumbers3);

//Map Helper
var cars=[
    { model: 'Swift', price: 'cheap'},
    { model: 'Magnite',price: 'Expensive' }
];
var prices=cars.map(function(car){
    return car.price;
});

console.log(prices);
 
