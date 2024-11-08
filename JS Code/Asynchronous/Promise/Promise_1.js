let myPromise = new Promise((res, rej) => {
  if (true) {
    return res();
  } else {
    return rej();
  }
});
myPromise
  .then(function () {
    console.log("Resolved");
  })
  .catch(function () {
    console.log("Rejected");
  });
