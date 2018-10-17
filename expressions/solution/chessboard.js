// Chessboard

var width = prompt('Select width:');
var height = prompt('Select height:');
var str1 = ' ';
var str2 = '#';

for (var i = 0; i < width; i++) {
  if (str1.length % 2 === 0) {
    str1 += ' ';
    str2 += '#';
  } else {
    str1 += '#';
    str2 += ' ';
  }
}

for (var i = 0; i < height; i++) {
  if (i % 2 === 0) {
    console.log(str1);
  } else {
    console.log(str2);
  }
}