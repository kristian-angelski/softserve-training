// FizzBuzz
for (var i = 1; i <= 100; i++){
  if (isDivByThree(i) && isDivByFive(i)) {
    console.log('FizzBuzz');
  } else if (isDivByThree(i)){
    console.log('Fizz');
  } else if (isDivByFive(i)) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

function isDivByThree(number) {
  if (number % 3 == 0) {
    return true;
  } else {
    return false;
  }
}

function isDivByFive(number) {
  if (number % 5 == 0) {
    return true;
  } else {
    return false;
  }
}