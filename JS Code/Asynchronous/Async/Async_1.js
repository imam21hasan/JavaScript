function myAsync1() {
  return Promise.resolve("Hello without async");
}
console.log(myAsync1());

async function myAsync2() {
  return "Hello with async";
}
console.log(myAsync2());
