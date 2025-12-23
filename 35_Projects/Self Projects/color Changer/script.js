const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "Red") {
      body.style.backgroundColor = e.target.id;
    }
     if (e.target.id === "Yellow") {
      body.style.backgroundColor = e.target.id;
    }
     if (e.target.id === "Pink") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
