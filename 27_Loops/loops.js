// For Loop

for (let i = 0; i < 10; i++) {
  const element = i;
  //   console.log(element);
}
// .............................................................................

for (let j = 1; j <= 10; j++) {
  const element = j;























  
  // console.log(`Table of ${j}`);

  for (let k = 1; k <= 10; k++) {
    const element = k;
    // console.log(`${j} * ${k} = ${j * k}`);
  }
}
// ....................................................................................

for (let m = 0; m < 10; m++) {
  const element = m;
  if (m == 5) {
    // console.log("Panjtanpaak");
  }
  //   console.log(element);
}
// ...................................................................

let myArry = ["flash", "batman", "superman"];
// console.log(myArry.length);

for (let index = 0; index < myArry.length; index++) {
  const element = myArry[index];
  //   console.log(element);
}
// ......................................................................

// break and continue

// break

for (let i = 1; i <= 20; i++) {
  const element = i;
  if (i == 9) {
    // console.log("Detected 9");
    break;
  }

  //   console.log(element);
}

//continue

for (let l = 1; l <= 13; l++) {
  const element = l;

  if (l == 6) {
    console.log("Urs Mubarak");
    continue;
  }
  console.log(element);
}
