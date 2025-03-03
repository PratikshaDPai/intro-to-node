const validator = require("validator");
const fs = require("fs");

fs.writeFile("./hello.txt", "hello, friend", () => {
  console.log("done creating file");
});

const lowerCaseString = "absoidfve";
const upperCaseString = "HI THERE";

console.log(
  validator.isUppercase(lowerCaseString),
  validator.isUppercase(upperCaseString)
);
