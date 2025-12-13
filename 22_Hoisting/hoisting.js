function one() {
  const username = "hitesh";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  //   two();
}
// one()

if (true) {
  const username = "hitesh";

  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }

  //   console.log(website);
}
// console.log(username);

// +++++++++++++++++interesting++++++++++++++++++++

console.log(addone(3)); // aur aise b l no 31

function addone(num) {
  return num + 1;
}
// console.log(addone(3)); /// ye code aise b run hoga l no 26

// console.log(addtwo(5))  //

const addtwo = function (num) {
  return num + 2;
};
console.log(addtwo(5)); // but ye wala syntex l no 33 se run nahi hoga

addtwo(5);
