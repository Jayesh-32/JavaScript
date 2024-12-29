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
// 


let new1={
    1 :'a',2:'b',3:'c',4:'d'
}
let new2={
    5 :'e',6:'f',7:'g',8:'h'
}

// let new3={new1,new2};

let new3={...new1,...new2};

// console.log(new3);

let userprof={
    name:"Jayesh",
    age:22,
    "Aadhar No":'2424 2424 2424',
    email:"jayesh@gmail.test",
    [sym]:'testing',
    lastLogin:[101012, 1465464]
}

// console.log(Object.keys(userprof));
// console.log(Object.values(userprof));
// console.log(Object.entries(userprof));


let {"Aadhar No": ad,email, name2="vivek"}=userprof;
let userData={
    name:"Jayesh",
    age:22,
    edu:{
        stream:'science',
        branch:'extc'
    }
}

let {name, edu:{study}}=userData;
console.log(name1);

