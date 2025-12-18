// for Of Loop

// 'for in Loop' is used for : objects  
// 'for of Loop' is used for :  arrays

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  //   console.log(num);
}

const greeting = "Hello world";
for (const greet of greeting) {
  //   console.log(`Each Char is ${greet}`);
}

////////////////////Maps

const mymap = new Map();
mymap.set("IN", "India");
mymap.set("US", "USA");
mymap.set("FR", "France");
mymap.set("NP", "Nepal");

// console.log(mymap);

for (const key of mymap) {
  console.log(key);
}

