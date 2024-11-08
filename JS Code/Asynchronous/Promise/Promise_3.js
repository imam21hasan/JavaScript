let randomNum = new Promise((res, rej) => {
  let n = Math.ceil(Math.random() * 10);
  if (n <= 5) {
    res(n);
  } else {
    rej(n);
  }
});
randomNum
  .then(function (x) {
    console.log(`${x} is less than 6`);
  })
  .catch(function (x) {
    console.log(`${x} is greater than 5`);
  });
