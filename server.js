const validator = require("validator");
const fs = require("fs");

fs.writeFile("./hello.txt", "hello, friend", () => {
  console.log("done creating file");
});

const test = "absoidfve";
console.log(validator.isAlpha(test));
