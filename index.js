const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function caseFixer(string) {
  let allWords = string.split(' ');
  let returnWords = [];
  for (let i = 0; i < allWords.length; i++) {
    let newWord = allWords[i][0].toUpperCase() + allWords[i].slice(1);
    //console.log(newWord);
    returnWords.push(newWord);
  }
  //console.log(returnWords);
  let returnString = returnWords.join(' ');
  //console.log(returnString);
  return returnString;  
}

const titleCased = () => {
  return tutorials.map(caseFixer);
}
/*
let sampleString = "My bologna has a first name";
console.log(caseFixer(sampleString));
console.log(titleCased);
*/