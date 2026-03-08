let user = "Mirzobek";
let age = 16;

console.log("Foydalanuvchi:", user);

function calculate(a, b) {
  let sum = a + b;
  let minus = a - b;
  let multiply = a * b;
  let divide = a / b;

  return {
    sum: sum,
    minus: minus,
    multiply: multiply,
    divide: divide
  };
}

let result = calculate(12, 4);

console.log("Yig'indi:", result.sum);
console.log("Ayirma:", result.minus);
console.log("Ko'paytma:", result.multiply);
console.log("Bo'linma:", result.divide);

let numbers = [5, 10, 15, 20];

numbers.forEach(function(num) {
  console.log("Son:", num);
});

if (age >= 18) {
  console.log("Siz katta yoshdasiz");
} else {
  console.log("Siz hali voyaga yetmagansiz");
}

console.log("Dastur ishladi");