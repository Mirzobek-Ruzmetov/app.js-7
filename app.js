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