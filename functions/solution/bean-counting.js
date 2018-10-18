function countBs(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'B') {
      count++;
    }
  }

  return count;
}

function countChar(str, sbl) {
  var count = 0;
  var symbol = sbl;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === symbol) {
      count++;
    }
  }

  return count;
}

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));