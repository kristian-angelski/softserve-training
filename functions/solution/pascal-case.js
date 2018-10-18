function pascalCase(str) {
  var sentenceArr = str.split(' ');
  var pascalCaseSentence = '';
  for(var i = 0; i < sentenceArr.length; i++) {
    pascalCaseSentence += sentenceArr[i].charAt(0).toUpperCase() + sentenceArr[i].substr(1).toLowerCase() + ' ';
  }

  console.log(pascalCaseSentence);
}

pascalCase('how are you today');
pascalCase('fine thank you');
