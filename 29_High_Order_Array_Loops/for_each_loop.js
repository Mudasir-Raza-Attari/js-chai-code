const coding = ["js", "ruby", "java", "python", "c++"];

// function
// coding.forEach(function (item) {
// console.log(item);
// for-Each koi b value return nahi karta

//array
coding.forEach((val) => {
  //   console.log(`val of ${val}`);
});

function printme(item) {
  console.log(item);
}
// coding.forEach(printme);

// ...................................

const mycoding = [
  { className: "OOla", noOfStudents: 36 },
  { className: "saniya", noOfStudents: 41 },
  { className: "Rabiya", noOfStudents: 63 },
];
mycoding.forEach((item) => {
  // console.log(item.className);
});

// ++++++++++ video no 30 +++++++++++++++++++++++++++++

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 5);
console.log(newNums);
