let car = ["Bugatti","Rolls Royce","Ferrari","Lamborghini","Mercedes","BMW","Audi"];
car.push("Bentley");
car.push("Porsche");

// for Loop
for (let i = 0; i < car.length; i++) {
  console.log(car[i]);
}
console.log("\n");

// for In Loop
let person = {
  name: "Imam",
  age: 20,
  country: "Bangladesh",
  profession: "Student",
};

for (let i in person) {
  console.log(person[i]);
}
console.log("\n");

// forEach method Loop
car.forEach(function (i) {
  console.log(i);
});
console.log("\n");

// for of Loop
for (let i of car) {
  console.log(i);
}
console.log("\n");

// while Loop
let num = 7;
while (num < 10) {
  console.log("This is 'while' loop");
  num++;
}
console.log("\n");

// do while Loop
let i = 7;
do {
  console.log("This is 'do while' loop");
  i++;
} while (i < 10);