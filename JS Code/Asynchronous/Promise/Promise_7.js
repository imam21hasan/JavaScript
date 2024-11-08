let myPromise1 = new Promise((res, rej) => {
  return res("My promise-1 is successful.");
});

let myPromise2 = myPromise1.then(function (res1) {
  console.log(res1);
  return new Promise(function (res, rej) {
    return res("My promise-2 is successful.");
  });
});
myPromise2.then(function (res2) {
  console.log(res2);
});