const test = function () {
  console.log("Function is working...");
  let aTime = new Date().getTime();
  while (aTime + 1000 >= new Date().getTime());
  console.log("After 2000ms function working over.");
};
console.log("First console");
test();
console.log("Last console");