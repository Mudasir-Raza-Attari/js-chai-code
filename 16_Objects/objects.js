// singleton .....
//object.create

// objects literals
const jsuser = {
  name: "Mudasir",
  age: 32,
  location: "kashmir",
  email: "ahmudasir47@gmail.com",
  isLogedIn: false,
  lastLoginDays: ["sunday", "saturday"],
};
// console.log(jsuser);
// console.log(jsuser.email);
// console.log(jsuser["name"]);

jsuser.email = "sheikh.mudasir11@yahoo.com"; // update aise karte hai
// console.log(jsuser.email);

// Object.freeze(jsuser); // freeze ab is makuch b change nahi hoga
jsuser.name = "Attari";
// console.log(jsuser.name);
jsuser.greeting = function () {
  console.log("I Love Dawateislami");
};
console.log(jsuser.greeting());
