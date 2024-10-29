function diceRoll() {
  let randomNum = Math.ceil(Math.random() * 6);
  let imgNum = "image/img-" + randomNum + ".jpg";

  document.getElementById("ludo").src = imgNum;
}
function redAlart(){
    document.getElementById('btn').style.boxShadow="0px 0px 25px rgba(255, 0, 0, 1)";
}