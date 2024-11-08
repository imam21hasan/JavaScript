async function randomUser() {
  let urlAPI = await fetch(`https://randomuser.me/api/`);
  let randomData = await urlAPI.json();
  console.log(
    `${randomData.results[0].name.title} ${randomData.results[0].name.first} ${randomData.results[0].name.last}`
  );
  console.log(`${randomData.results[0].gender}`);
  console.log(`${randomData.results[0].location.country}`);
}
randomUser();
