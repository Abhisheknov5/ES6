// The Some helper
console.log("6 the some helper");
/*Give acollection of Games with mentioned least required RAM by the collection if atleast aone of the games 
can run in your Computer(return true/false)*/
/*
const games = [
    { name: "Counter Strike",ram: 8 },
    { name: "GTA 5",ram: 16},
    { name: "Need for Speed",ram: 12},
    { name: "Road Rash",ram: 2},
]
const myRam = 12;

//Without Some Helper
function canBuy1 (games,requiredRam){
    let canBuy=false;
    for(let i=0;i<games.length;i++){
        if (games[i].ram>=requiredRam){
            canBuy=true;
            break;
        }
    }
    return canBuy;
}
console.log('1.can buy games?',canBuy1(games,myRam));

//with some,without arrow functions
function canBuy2(games,requiredRam){
    return games.some (function (game){
      return game.ram>=requiredRam;
    });
}
console.log('2.can buy games?',canBuy1(games,myRam));

//With some with Arrow function(one linear)

const canBuy3 = (games,requiredRam) => games.some(game=> game.ram>=requiredRam);

console.log('3.can buy games?',canBuy1(games,myRam));
*/

//Another Simple Example
// Slot of people are sent for driving License test check wheather each person in a slot is 18 yeras or Above
const slot1=[
    { name: 'Abhishek',age: 24},
    { name: 'Akash',age: 23},
    { name:'Rahul',age: 25}
];
const slot2=[
    { name: 'Madan',age: 27},
    { name: 'Suresh',age: 28},
    { name:'Alok',age: 29}
];

//with Arrow Functions
const validateSlot = slot => !( slot.every(person => person.age<18));
console.log("slot 1:",validateSlot (slot1));
console.log("slot 2:",validateSlot(slot2));
