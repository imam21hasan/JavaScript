const mainBody = document.getElementById("body");
const colorDiv = document.querySelectorAll("div");

colorDiv.forEach(function (value) {
  value.addEventListener("click", function () {
    let colorName = this.classList[0];
    let color = "";
    if (colorName === "red") {
      color = "red";
    }
    if (colorName === "green") {
      color = "green";
    }
    if (colorName === "blue") {
      color = "blue";
    }
    if (colorName === "orange") {
      color = "orange";
    }

    mainBody.style.backgroundColor = color;
  });
});
