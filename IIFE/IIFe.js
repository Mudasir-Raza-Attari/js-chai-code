// Immediately Invoked function Expressions IIFE

// function chai (){
// console.log(`DB CONNECTED`);

// }
// chai() // DB CONNECTED

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})(); //DB CONNECTED    (a)(b) IIFE // a. function defination     b. Execution call

// Jo Function immediately Execute ho jata hai
// Global Scope k polution se problem hoti hai.... us decleration k polution ko hatane k liye hum ne IIFe ka Istimal kiya

(() => {
  // unnameIIFE
  console.log(`DB Connected`);
})();

//  how to pass parameterrs

((name) => {
  console.log(`I Love Madina , ${name}`);
})("Mudasir");
