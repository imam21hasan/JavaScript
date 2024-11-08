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

Promise.all([myPromise1, myPromise2]).then((res) => console.log(res));