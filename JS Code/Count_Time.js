function executionTiming() {
  console.time("Execution Time");

  for (let a = 1; a < 10; a++) {
    console.log("ABC");
  }
  console.timeEnd("Execution Time");
}
executionTiming();