// reduce  Helper
console.log("7 the reduce helper");
//Sum of the Numbers given in Array
/*
const numbers=[1,2,3,4,5];
let sum=0;

//Without reduce helper
for (let i=0;i<numbers.length;i++){
    sum=sum+numbers[i];
}
console.log("Sum using Normal for:",sum);

//Using for Each
let sum2 = 0;
numbers.forEach(number => sum2+=number);
console.log("Sum using forEach ",sum2);

//Using reduce
let sum3= numbers.reduce(function(total,number) {
    return total + number;
}, 0);//Initial value=0
console.log("Sum of using reduce:",sum3);

//one liner
let sum4 = numbers.reduce((sum,number)=> sum+number,0);
console.log("one liner:",sum4);
*/
/*
// adding number using reduce helper
 var numbers = [10, 20, 30];
 var sum = 0;
 for (var i=0;i<numbers.length;i++){
    sum=sum+numbers[i];
 }
 console.log(sum);

 "-----"
 numbers.reduce(function(sum,number){
    return number+sum;
 },0);
 console.log("Reduce helper",sum);
 */

//primary color udeamy
var primaryColors= [
    {color: 'red'},
    {color: 'Yellow'},
    {color: 'blue'}
];
primaryColors.reduce(function(previous,primaryColor) {
    previous.push(primaryColor.color);
    return previous;

}, []);
console.log(primaryColors);

/*
function balancedParents(string) {
    return !string.split("").reduce(function(previous, char){
        if (previous<0) {return previous;}
        if(char==="(") {return ++previous;}
        if(char===")"){return --previous;}
        return previous;
    }, 0);
}
balancedParents("(((())))");
*/