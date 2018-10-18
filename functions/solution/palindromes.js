function checkPalindromes(str) {
  var reversed = str.split('').reverse().join('');
  // console.log(reversed);

  if (str === reversed) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkPalindromes('car');
checkPalindromes('madam');