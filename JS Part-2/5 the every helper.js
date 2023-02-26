// The every helper
console.log(" 5 The every helper");
/*

const fieldData1 = ['Abhishek','abc@xyz.com','21','Delhi',''];
const fieldData2= ['Aman','def@abc.com','22','Kolkata','Student'];
// Without every
function validateFields(fields){
    let allFieldsValid = 'true';
    for(let i=0;i<fields.length;i++){
        if (fields[i].length===0)
            allFieldsValid=false;
    }
    return allFieldsValid;
}
console.log("Validating Fields without every:");
console.log("fieldData1: ",validateFields(fieldData1));
console.log("fieldData2: ",validateFields(fieldData2));

//with every ,without Arrow function
function validateFields2(fields){
    return fields.every(function(field){
        return field.length>0;
    });
}
console.log("Validating Fields with every:");
console.log("fieldData1: ",validateFields(fieldData1));
console.log("fieldData2: ",validateFields(fieldData2));

// With ever, with arrow function(one liner)
const validateFields3 = fields=> fields.every (field=>field.length>0);
console.log("Validating Fields with every:")
console.log("fieldData1: ",validateFields3(fieldData1));
console.log("fieldData2: ",validateFields3(fieldData2));
*/
/*
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
//without Arrow Function
function validateSlot (slot){
    return slot.every(function(person){
        return person.age >= 18;
    });
}
console.log("Result 1\n..........");
console.log("slot 1:",validateSlot (slot1));
console.log("slot 2:",validateSlot(slot2));
console.log("-------------------------------")

//with Arrow Functions
const validateSlot2 = slot => slot.every(person => person.age>=18);
console.log("Result 2\n..........");
console.log("slot 1:",validateSlot (slot1));
console.log("slot 2:",validateSlot(slot2));
console.log("-------------------------------")

*/

//Udeamy
//Computer example
var Computers=[
    {name: 'Apple',ram: 24},
    { name:'Compaq', ram: 4},
    {name: 'Acer',ram: 32}
];
var allComputersCanRunProgram = true;
var onlySomeComputerCanRunProgram = false;
for (var i=0;i<Computers.length;i++) {
    var Computer = Computers[i];
    if(Computer.ram<16) {
        allComputersCanRunProgram=false;
    } else{
        onlySomeComputerCanRunProgram = true;
    }
}
console.log("allComputersCanRunProgram ");
console.log("onlySomeComputerCanRunProgram");

Computers.every(function(Computer){
    return Computer.ram>16;
});
