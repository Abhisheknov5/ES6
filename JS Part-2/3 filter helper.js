// filter helper
console.log("3 filter helper");

const numbers=[30,42,105,294,876,444,98,55,671];
//without filter helper
const filteredNum1 = [];
for(let i=0;i<numbers.length; i++){
    if(numbers[i]>100)
       filteredNum1.push(numbers[i]);
}
console.log('filteredNum1:',filteredNum1);

//With filter , without Arrow fun
const filteredNum2 = numbers.filter(function (number){
    return number>100;
});
console.log('filteredNum2:',filteredNum2);

//with filter, with arrow function
let filteredNum3 = numbers.filter (number=> number>100);
console.log('filteredNum3:',filteredNum3); 


var products = [
    {name: 'Cucumber',type:'vegetables'},
    {name: 'banana',type:'fruit'},
    {name:'celery',type:'vegetables' },
    {name: 'Orange',type:'fruit'}

];
var filteredproducts = [];
for (var i=0; i<products.length;i++){
    if (products[i].type ==='fruit'){
        filteredproducts.push(products[i]);
    }
}
console.log(filteredproducts);


//More filtering
var products = [
    {name: 'Cucumber',type:'vegetable',quantity:0,price:1},
    {name: 'banana',type:'fruit',quantity:10,price:15},
    {name:'celery',type:'vegetable',quantity:30,price:13 },
    {name: 'Orange',type:'fruit',quantity:3,price:5}

];
//Type is vegetables,quantity is greater than 0,price is less than 10
products.filter(function(product)  {
    return product.type === 'vegetable'
    && product.quantity > 0
    && product.price < 10
});
console.log()


var people = [
    { name: 'John', isStudent: false },
    { name: 'Mark', isStudent: true },
    { name: 'Kepler', isStudent: false },
    { name: 'Stan', isStudent: true },
    { name: 'Ben', isStudent: true },
];

let students = [];

// Without filter helper
for (let i=0; i<people.length; i++) {
    if (people[i].isStudent)    students.push(people[i]);
}
console.log ('Students1: ', students);

// With filter without arrow fn
let students1 = people.filter(function (person) {
    return person.isStudent;
})
console.log ('Students2: ', students1);

// With filter with arrow fn
let students2 = people.filter(person => person.isStudent)
console.log ('Students3: ', students2);