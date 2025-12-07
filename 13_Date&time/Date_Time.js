// date

let myDate = new Date();
console.log(myDate.toDateString());  
console.log(myDate.toLocaleString());



myDate.toLocaleString("default", {
  weekday: "long",
});  //12/7/2025, 8:13:05 PM
