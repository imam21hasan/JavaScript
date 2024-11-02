const arr = [1, 2, 3, 4];

const totalSum = arr.reduce((acc, curValue) => {
    console.log(`Accumulator : ${acc} and Current Value : ${curValue}`);
    return acc + curValue;
  }, 0);
console.log('Total sum : '+totalSum);

const totalSum2 = arr.reduce((acc, curValue) => {
  return acc + curValue;
}, 5);
console.log(totalSum2);

const totalSum3 = arr.reduce((acc, curValue) => acc + curValue, 10);
console.log(totalSum3);



const stack = [
  {
    name: "MERN Stack",
    property: "Mongo, Express, React, Node",
    foundation: "JavaScript",
    price: 5000,
  },
  {
    name: "Laravel",
    property: "JavaScript, Vue, PHP, Laravel, MySQL",
    foundation: "PHP",
    price: 4000,
  },
  {
    name: "WordPress",
    property: "JavaScript, PHP, WordPress, MySQL",
    foundation: "PHP",
    price: 3500,
  },
];

const coursePrice = stack.reduce((acc, course) => acc + course.price, 100);
console.log(coursePrice);
