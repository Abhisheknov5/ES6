
//Find helper
console.log("4 find helper");
/**Given an array of numbers,
 * find the first element which is multiple of 7
 */
/*
const numbers=[1,13,15,18,28,32,47,50];
let firstMultiple;

//without the find helper
for (let i=0; i<numbers.length; i++) {
    if (numbers[i]%7 === 0){
        firstMultiple = numbers[i];
        break;
    }
}
console.log(firstMultiple);

//with find helper (without Arrow function)

let firstMultiple2 = numbers.find(function (number){
    if (number%7 === 0) {
        return true;
    }
});
console.log(firstMultiple2);

//with find helper with arrow function

let firstMultiple3 =numbers.find(number=> number%7===0);
console.log(firstMultiple3);
*/

/*
//Given an array of objects having the data of students, find the student having register number 9018
const students=[
    { regNo: 12345, name: "Madhav" },
    { regNo: 12346,name: "Abhishek"},
    { regNo:12347,name: "Ashish"},
    { regNo:12348,name: "Alok"},
    { regNo:12349,name: "Mohan"},
];
let wantedStudents = students.find(student=> student.regNo===12349);
console.log(wantedStudents);
*/

var users=[
    {name: 'Abhishek'},
    {name: 'Alex',id:4},
    {name: 'Aman'},
    {name: 'Alex'}

];
var user;
for (var i=0; i<users.length;i++) {
    if(users[i].name === 'Alex') {
    user=users[i];
    break;
}
}
console.log(user);


users.find(function(user){
   return user.name === 'Alok';
});


// Car model
/*
var posts=[
    {id: 1,title:'New post'},
    {id: 2,title:'old post'}
];
var comment = { postId: 1, content: 'Great post'};
function postForComment(posts,comment) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}
postForComment(posts,comment);
*/
