console.log("Mudasir Raza Attari");

str1 = "ya Allah";
str2 = "Reham Farma";

console.log(`${str1} ${str2}`);

const newWord = new String("Dawateislami");
const newAbc = new String("        Sirat ul jinan      ");

console.log(newWord.charAt(3));
console.log(newWord.indexOf("s"));
console.log(newWord.length);
console.log(newWord.toUpperCase());
console.log(newWord.toLowerCase());
console.log(newAbc.trim());
console.log(newWord.slice(1, 6));
console.log(newWord.slice(-6, 9));
console.log(newAbc.replace("ul", "al")); //Sirat ul janan
console.log(newAbc.replace("jinan", "janan")); // siraat ul jinan
console.log(newAbc.replace("Sirat", "siraat")); //siraat ul jinan
console.log(newAbc.replace("rat", "Rat")); //SiRat ul jinan jian

console.log(newAbc.includes("Tafseer")); // false
console.log(newAbc.includes("jinan")); // true

// console.log(newAbc.split(" ")); need more learning abt it
