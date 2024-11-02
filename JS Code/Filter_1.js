const carBrand = ['BMW','Lamborghini','Mercedes','Audi'];

carBrand.forEach(car => console.log(car));

const carCapiB = carBrand.filter(car => car.toLowerCase().startsWith('b'));
console.log(carCapiB);

const carLen4 = carBrand.filter(car => car.length === 4);
console.log(carLen4);

const carWithM = carBrand.filter(car =>
    car.toLocaleLowerCase().includes('m')
);
console.log(carWithM);


const numbers = [1, 2, 3, 4, 5, 6, 7];
const greater5 = numbers.filter(x => {
  return x > 5;
});
console.log(greater5);


const forNums = [];
numbers.forEach(x => {
  if (x>5) {
    forNums.push(x);
  }
});
console.log(forNums);