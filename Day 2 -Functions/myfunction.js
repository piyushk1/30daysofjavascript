const readlineSync = require('readline-sync');

function sum(a, b) {
  let num1 = readlineSync.question('Enter first number: ');
  let num2 = readlineSync.question('Enter second number: ');
  return parseInt(num1) + parseInt(num2);
}



function multiply(a,b){
    let num1 = readlineSync.question('Enter number 1: ');
    let num2 = readlineSync.question('Enter number 2: ');
    return parseInt(num1) * parseInt(num2);

}

let result = sum();
let multiplication = multiply();
console.log(result);
console.log(multiplication);