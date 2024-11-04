let myHeight = document.getElementById("height");
let myWeight = document.getElementById("weight");
let calculate = document.getElementById("button");

let score = document.getElementById("rslt");
let result = document.querySelector(".result");

calculate.addEventListener("click", function () {
  let newHeight = parseFloat(myHeight.value);
  let newweight = parseFloat(myWeight.value);

  let sqrHeight = Math.pow(newHeight / 100, 2);

  let bmi = newweight / sqrHeight;
  score.textContent = bmi.toFixed(2);

  result.style.display = "block";

  if (score.textContent < 18.5) {
    score.style.color = "blueviolet";
  } else if (score.textContent < 24.9) {
    score.style.color = "green";
  } else if (score.textContent < 29.9) {
    score.style.color = "darkorange";
  } else {
    score.style.color = "red";
  }
});

let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
