// console.log("Hello world");

let num=89764565464654n;

// console.log(typeof num);

let name=["Jayu", "sam", "vivek"];

// console.log(typeof name);
 
const printname=function(){
    console.log("Hello world");
}

const prof={
    "id":123,
    "name":"Jayesh"
}
// console.log(typeof prof);

 /* primitive store in stack and non primitive store in heap */

const prof2=prof;
prof2.name="Jayesh Nakashe";

console.log(prof);