let randomNumber,maxNumber,attempts,maxAttempts;

function setDifficulty() {
  const difficulty = document.getElementById("difficulty").value;
  attempts = 0;

  if (difficulty === "easy") {
    maxNumber = 10;
    maxAttempts = 5;
  } else if (difficulty === "medium") {
    maxNumber = 50;
    maxAttempts = 7;
  } else if (difficulty === "hard") {
    maxNumber = 100;
    maxAttempts = 10;
  }

  document.getElementById("range").innerText = `1-${maxNumber}`;
  
  randomNumber = Math.ceil(Math.random() * maxNumber);

  document.getElementById("result").innerText ="New game started! Make a guess.";
}

setDifficulty();

function makeGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  let rslt = document.getElementById("result");
  if (userGuess === randomNumber) {
    rslt.innerText = `Correct! You guessed it in ${attempts} attempt(s)!`;
    rslt.style.color="green";
    return;
  }
  else if (userGuess < randomNumber) {
    rslt.innerText = `Too low! Try again. You have ${maxAttempts - attempts} attempts`;
  }
  else if (userGuess > randomNumber) {
    rslt.innerText = `Too high! Try again. You have ${maxAttempts - attempts} attempts`;
  }
  else {
    rslt.innerText = "Please enter a valid number.";
  }

  if (attempts >= maxAttempts) {
    rslt.innerText = `Game over! \nThe correct number was ${randomNumber}.`;
    rslt.style.color = "red";
    return;
  }
}