function min(num1, num2) {
  var min = num1;
  if (min > num2) {
    min = num2;
  }
  
  return min;
}

console.log(min(3,5));
console.log(min(5,3));