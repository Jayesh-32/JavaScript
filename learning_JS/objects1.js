//singleton where create new single Object
//Object.create()


//Object literals
const sym=Symbol();

let user={
    name:"Jayesh",
    age:22,
    "Aadhar No":'2424 2424 2424',
    email:"jayesh@gmail.test",
    [sym]:'testing',
    lastLogin:[101012, 1465464]
}

user.func1=function(){
    console.log("Hello bhai log");
    console.log(`I am ${this.name} and age is ${this.age}`);
}

// Object.freeze(user);
// user.name="Jayesh Nakashe";
// console.log(user.email);
// console.log(user['Aadhar No']);
console.log(user);
console.log(user.func1());
