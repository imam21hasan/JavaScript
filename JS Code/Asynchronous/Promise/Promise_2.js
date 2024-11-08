const myPromise = new Promise((res, rej) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      res("Operation successful.");
    } else {
      rej("Operation failed !!!");
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise completed.");
  });
