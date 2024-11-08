const myPromise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("My promise-1 is successful.");
  }, 3000);
});

const myPromise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("My promise-2 is successful.");
  }, 1000);
});

myPromise1.then(function (res) {
  console.log(res);
});

myPromise2.then(function (res) {
  console.log(res);
});