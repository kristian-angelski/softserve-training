function longestWord(str) {
  var wordsArray = str.split(' ');
  var currentLongest = wordsArray[0];
  var currentLongestLength = wordsArray[0].length;
  // console.log(currentLongestLength);

  for(var i = 1; i < wordsArray.length; i++) {
    if (wordsArray[i].length > currentLongestLength) {
      currentLongest = wordsArray[i];
      currentLongestLength = wordsArray[i].length;
    }
  }
  console.log(currentLongest);
}

longestWord('Which is the longest word in this sentence');