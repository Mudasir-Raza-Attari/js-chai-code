const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce(function (acc, curval) {

//   console.log(`acc: ${acc} and curval ${curval}`);

//   return acc + curval;
// }, 0);

// console.log(myTotal);

const myTotal = myNums.reduce((acc, curval) => acc + curval, 0);
// console.log(myTotal);

// .........................................

const shoppingCart = [
  {
    itemName: "js Course",
    price: 999,
  },
  {
    itemName: "py Course",
    price: 1999,
  },
  {
    itemName: "data Science Course",
    price: 3000,
  },
];

// const cart = shoppingCart.reduce((acc , val)=> acc + val.price,0)

const cart = shoppingCart.reduce(function (acc, item) {
  return acc + item.price;
}, 0);

console.log(cart);
