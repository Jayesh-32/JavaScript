let marvelheroes=['thor', 'flash', 'ironman'];
let dc_heroes=["bheem","superman","batman"];

// marvelheroes.push(dc_heroes);
// console.log(marvelheroes);

// let heroes=marvelheroes.concat(dc_heroes);
// console.log(heroes);

let newheroes=[...marvelheroes,...dc_heroes];
// console.log(newheroes);

let arr=[1, 2, 3, [4, 5], 6, [[7,8],9]]

let newarr=arr.flat(Infinity);
// console.log(newarr);

let name="Jayesh";
let age=22;
let id=46546;

let val=Array.of(name, age, id);

// console.log(Array.isArray(val));

// console.log(Array.from(null));

// let marvelheroes=['thor', 'flash', 'ironman'];

const [val1,, val3, val4="hulk"]=marvelheroes;
// const [val1, ...valarr]=marvelheroes;

console.log(val3);
// console.log(valarr);


