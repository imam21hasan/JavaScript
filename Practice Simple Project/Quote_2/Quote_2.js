let quoteInfo = document.getElementById("quote");
let authorInfo = document.getElementById("source");
let button = document.getElementById("button");

let apiURL = `https://api.api-ninjas.com/v1/quotes?category=success`;
let apiKey = `Use your own API key`;

let getQuote = () => {
  fetch(apiURL, {
    headers: {
      "X-Api-Key": apiKey,
    },
  })
    .then((valid) => valid.json())
    .then((data) => {
      quoteInfo.textContent = data[0].quote;
      authorInfo.textContent = data[0].author;
    })
    .catch(() => {
      quoteInfo.innerHTML =
        "<h3 style='color:red'>Something went wrong !!!</h3>";
    });
};

button.addEventListener("click", getQuote);
