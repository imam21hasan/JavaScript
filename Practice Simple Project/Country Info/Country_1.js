let countryName = document.getElementById("country");
let searchBtn = document.getElementById("search");
let finalResult = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  let countryInfo = countryName.value;
  let apiURL = `https://restcountries.com/v3.1/name/${countryInfo}?fullText=true`;

  fetch(apiURL)
    .then((valid) => valid.json())
    .then((data) => {
      finalResult.innerHTML = `
       <img src="${data[0].flags.svg}" class="flag">
       <h2> ${data[0].name.common}</h2>
       
            <div class="inner">
                <h4> Capital : </h4>
                <span> ${data[0].capital[0]}</span>
            </div>
        
            <div class="inner">
                <h4> Continent : </h4>
                <span> ${data[0].continents[0]}</span>
            </div>
        
            <div class="inner">
                <h4> Population : </h4>
                <span> ${(data[0].population / 1000000).toFixed(2)} M</span>
            </div>
        
            <div class="inner">
                <h4> Currency : </h4>
                <span> ${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
      
            <div class="inner">
                <h4> Languages : </h4>
                <span> ${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
       `;
    })
    .catch(() => {
      if (countryInfo.length == 0) {
        finalResult.innerHTML = `<h3> Input field can't be empty !!!</h3>`;
      } else {
        finalResult.innerHTML = `<h3>Please enter a valid name<h3>`;
      }
    });
});
