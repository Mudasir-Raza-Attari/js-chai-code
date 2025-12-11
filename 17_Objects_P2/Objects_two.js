// const tinderUser = new Object()

// const tinderUser = {};

// tinder;

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj4 = {obj1 ,obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// console.log(obj4);

// const obj5 = Object.assign({}, obj1, obj2); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj5);

const obj5 = { ...obj1, ...obj2, ...obj3 }; //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obj5); // mostly used method

const users = [
  {
    id: 1,
    email: "h@gmil.com",
  },
  {},
  {},
];

const one = users[1].email;
console.log(one);
