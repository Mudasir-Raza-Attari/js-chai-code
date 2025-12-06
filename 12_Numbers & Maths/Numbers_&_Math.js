const score = 400;
// console.log(score);

const balance = new Number(100); // [Number: 100]

// console.log(balance);

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); // 100.00

const newNumber = 23.8966;
// console.log(newNumber.toPrecision(4)); // 23.90

const hundreds = 100000;
// console.log(hundreds.toLocaleString("en-IN")); // 1,00,000

// ++++++++++++++++++++++++ Maths+++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //4 makes negative to possitive only

// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.6)); // 5

// console.log(Math.ceil(5.2)); // 6

// console.log(Math.floor(5.8)); // 5

console.log(Math.random()); // hamsha value change rehti hai between 1 - 0

console.log(Math.random() * 10 + 1);

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // importat
