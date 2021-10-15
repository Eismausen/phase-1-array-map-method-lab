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



let fixedArray = tutorials.map(someCallBack);

function someCallBack(elementString) {
    //elementString = 'what does the this keyword mean?',

    let arrayOfWords = elementString.split(' ');
    console.log(arrayOfWords);
    
    for (const word of arrayOfWords) {
        word[0] = word[0].toUpperCase();
    }
    
    let fixedString = arrayOfWords.join(' ');



    return fixedString;
}

