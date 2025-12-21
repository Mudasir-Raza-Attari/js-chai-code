function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerText = `${langName}`;
  document.querySelector(".lang").appendChild(li);
}
addLanguage("python");
addLanguage("c++");
addLanguage("TypeSciprt");

// ..........another way..................

function addoptiLang(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".lang").appendChild(li);
}
addoptiLang("GoLang");
addoptiLang("Rust");

// edit
const secondlang = document.querySelector("li:nth-child(2)");
// secondlang.innerHTML = "Mojo";

const newli = document.createElement("li");
newli.textContent = "Java";
secondlang.replaceWith(newli);

//remove

const lastlang = document.querySelector("li:last-child");
lastlang.remove();

// const sec_last = document.querySelector("li:nth-child[2]");
// sec_last.remove(); 
// 
//  not working (is pe kaam karna hai mujhe)
