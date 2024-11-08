function randomUser() {
  fetch(`https://randomuser.me/api/`)
    .then(function (randomData) {
      return randomData.json();
    })
    .then(function (data) {
      console.log(data.results[0].location.country);
    })
    .catch(function () {
      console.log("No Data Found !!!");
    });
}
randomUser();
