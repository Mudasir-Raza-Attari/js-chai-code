// Array

const myArr = [0, 1, 2, 3, 4, 5, 6];
// console.log(myArr[2]);

// methods

myArr.push(7); // [  0, 1, 2, 3, 4, 5, 6, 7 ]

myArr.pop(); //[  0, 1, 2, 3, 4, 5, 6 ]

myArr.unshift(9); // [  9, 0, 1, 2, 3, 4, 5, 6 ] add to my start

myArr.shift(); // [  0, 1, 2, 3, 4, 5, 6 ]  deletes from the start

// console.log(myArr.includes(5)); // true

// console.log(myArr);

// +++++++++++++++++++++++++++++Part 2++++++++++++++++++++++++++++++++++++
const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const heros = [...marvel_heros, ...dc_heros];
console.log(heros);

// .............

const anotherArray = [1, 2, 3, [4, 5], [6, 7, [6, 7]]];

const myReal = anotherArray.flat(Infinity)
console.log(myReal);


// Array {is from of}           need more knowledge  