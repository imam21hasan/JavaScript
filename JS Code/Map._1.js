const country = new Map([
  ["Bd", "Bangladesh"],
  ["Pk", "Pakistan"],
  ["In", "India"],
  ["Np", "Nepal"],
]);
country.set("Bu", "Bhutan");
// country.set('Bn', 'Bangladesh');    // Map doesn't support duplicate element

for (const x of country) {
  console.log(x);
}

console.log("\n");

for (const [x, val] of country) {
  console.log(x, ":", val);
}

console.log("\n");

const numbers = [1, 2, 3, 4, 5];
const myNum1 = numbers.map((num) => num + 5);
console.log(myNum1);

const myNum2 = numbers.map((num) => num + 5).map((num) => num * 5);
console.log(myNum2);

const myNum3 = numbers
  .map((num) => num + 5)
  .map((num) => num * 5)
  .filter((num) => num >= 50);
  console.log(myNum3);