function reverse(num) {
  var number = num.toString();
  return number.split('').reverse().join('');
}

console.log(reverse(345));