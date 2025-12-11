function calculateCartPrice(...num1) {
  return num1;
} //  ...rest oprator here kabhi isko spread operator aur kabhi rest

console.log(calculateCartPrice(200, 300, 400));

function calculateCartPrice2(val1, val2, ...num1) {
  return num1;
} // num value ma 500 and 1000 jaye ga

console.log(calculateCartPrice2(200, 400, 500, 1000));

const user = {
  username: "Hitesh",
  price: 199,
};
function handleobject(anyobject) {
  console.log(
    `Username id ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handleobject(user) // one way

handleobject({
  username: "Mudasir",
  price: 299,
}); // another way
// _______________________________________________________________________________

const newArray = [200, 300, 400, 100];

function returnSecondvalue(getarray) {
  return getarray[1];
}
// console.log(returnSecondvalue(newArray));
