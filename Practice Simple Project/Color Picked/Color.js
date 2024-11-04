const mainBody = document.getElementById("body");
const colorDiv = document.querySelectorAll("div");

colorDiv.forEach(function (value) {
  value.addEventListener("click", function () {
    let className = this.classList[0];
    let color = "";
    if (className === "red") {
      color = "red";
    }
    if (className === "green") {
      color = "green";
    }
    if (className === "blue") {
      color = "blue";
    }
    if (className === "orange") {
      color = "orange";
    }

    mainBody.style.backgroundColor = color;
  });
});
