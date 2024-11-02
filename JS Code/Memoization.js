function calculatingArea(num) {
  return num*2;
}

function memoFunc() {
  let cache = {};
  return function optimizedCalArea(num) {
    if (num in cache) {
      console.log("Returning from Cache");
      // console.log(cache);
      return cache[num];
    } else {
      const result = calculatingArea(num);
      cache[num] = result;
      console.log("Calculating the result");
      return result;
    }
  };
}
const myOperation = memoFunc();

console.log(myOperation(8));
console.log(myOperation(8));
console.log(myOperation(15));
console.log(myOperation(85));
console.log(myOperation(85));
