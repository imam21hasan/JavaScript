(function (x, y) {
  console.log(x + y);
})(5, 6);


((x, y) => { 
  console.log(x + y);
})(10, 20);



const myIIFE = (function () {
  let privateVar = "This is a Private Variable";
  function privateFunc() {
    console.log("This is a Private Function");
  }
  return {
    publicVar: "This is a Public Variable",
    publicFunc: function () {
      privateFunc();
      return "This is a Public Function";
    },
  };
})();

// console.log(myIIFE.privateVar);          // Unaccessible
// console.log(myIIFE.privateFunc());       // Unaccessible
console.log(myIIFE.publicVar);              // Accessible
console.log(myIIFE.publicFunc());             // Accessible
