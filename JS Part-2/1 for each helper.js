//1 for each helper.js
//Iteration through Array
console.log(" 1 for each helper");

console.log("Iteration through Array:-");
var fruits=['Mango','Orange','Pineapple','Guava'];
//Basic syntax
for ( var i=0;i<fruits.length; i++){
    console.log(fruits[i]);
}
// for each Syntax
console.log("for each syntax:-");
fruits.forEach(function(fruit){
    console.log(fruit);
});

// For each with Arrow Function
console.log("For each with Arrow:-")
fruits.forEach(fruits=>{
    console.log(fruits);
});

// Sum of Number in Array element
console.log("Sum of Number in Array element:-");
const number=[6,1,2,3,8];
let sum=0;
number.forEach(number=>{
    sum=sum+number;
});
console.log(sum);

//Color
console.log("Color:-")
var color=['red','Blue','Green'];
for( var i=0; i<color.length;i++){
    console.log(color[i]);
}
color.forEach(function(color){
    console.log(color);
});

//Create an Array Number
var numbers=[1,2,3,4,5];
//Create a variable to hold the sum
var Sum=0;
function adder(numbers){
    Sum=Sum+numbers;
}
//Loop over the array incrementing the sum variable
numbers.forEach(adder);
//print the sum variable
console.log(Sum);
