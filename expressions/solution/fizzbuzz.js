// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

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