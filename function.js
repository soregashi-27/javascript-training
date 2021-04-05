function ourReusableFunction() {
  console.log('Heyya world');
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();
// three times Heyya world

function reusableFunction() {
  console.log('Hi world');
}

reusableFunction();

function substractFunctionWithArgs(a, b) {
  console.log(a - b);
}

substractFunctionWithArgs(10, 5);
substractFunctionWithArgs(50, 5);

function addFunctionWithArgs(a, b) {
  console.log(a + b);
}

addFunctionWithArgs(10, 5);
addFunctionWithArgs(50, 5);

//Global scope
let myGlobal = 0;

function funFirst() {
  oppsGlobal = 6;
}

function funSecond() {
  let output = '';
  if (typeof myGlobal != 'undefined') {
    output += 'myGlobal' + myGlobal;
  }
  if (typeof oopsGlobal != 'undefined') {
    output += 'oppsGlobal' + oppsGlobal;
  }
  console.log(output);
}
funFirst();
funSecond();

function myLocalScope() {
  let myVar = 5;
  console.log(myVar);
}
myLocalScope();

const outerWear = 'T-shirt';

function myOutFit() {
  let outerWear = 'Sweater';
  return outerWear;
}

console.log(myOutFit());
console.log(outerWear);

function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
  return num * 5;
}

console.log(timesFive(5));

var sum = 0;
function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

let prcessed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
/* 「引数」→「独立変数」
Argment：引数というよりも関数の独立変数と意訳したほうが理解できる。
独立変数には2種類あって、「parameter（仮引数）」、「argument（実引数）」。この意訳も非常にわかりにくい。

言い換えるとこんな感じ
・parameter : defining arguments in functions
・argument : calling back arguments in functions

以上から、引数という言葉はあまり使わないようにする
使うなら英語の言い方のほうがしっくりくる。
*/

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

let testArr = [1, 2, 3, 4, 5];

console.log('Before' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
//↑argument
console.log('After' + JSON.stringify(testArr));

function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return 'Yes, that was true';
  }
  return 'No, that was false';
}

console.log(trueOrFalse(false));

function testEqual(val) {
  if (val == 12) {
    return 'Equal';
  }
  return 'Not Equal';
}

console.log(testEqual(12));

function testStrict(val) {
  if (val == 7) {
    return 'Equal';
  }
  return 'Not Equal';
}

console.log(testStrict(7));

/* 
== vs ===

== : In the case of string-number comparison, converting string to number.

=== : Absolutely the same.
*/

function compareEquality(a, b) {
  if (a === b) {
    return 'Equal';
  }
  return 'Not Equal';
}

console.log(compareEquality(10, '10'));

function testNotEqual(val) {
  if (val != 99) {
    return 'Not Equal';
  }
  return 'Equal';
}

console.log(testNotEqual(199));

function testStrictNotEqual(val) {
  if (val !== 17) {
    return 'Not Equal';
  }
  return 'Equal';
}

console.log(testStrictNotEqual(17));

function testGreaterThan(val) {
  if (val > 100) {
    return 'Over 100';
  }

  if (val > 10) {
    return 'Over 10';
  }

  return '10 or Under';
}

console.log(testGreaterThan(1000));

//1:17:48~
//https://www.youtube.com/watch?v=PkZNo7MFNFg

function testLessOrEqual(val) {
  if (val <= 12) {
    return 'smaller Than or Equal to 12';
  }
  if (val <= 24) {
    return 'smaller Than or Equal to 24';
  }

  return 'More than 24';
}
console.log(testLessOrEqual(18));

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return 'Yes';
  }
  return 'No';
}
console.log(testLogicalAnd(30));

function testElse(val) {
  let result = '';

  if (val > 5) {
    result = 'Bigger than 5';
  } else {
    result = '5 or Smaller';
  }

  return result;
}
console.log(testElse(4));

function testElseIf(val) {
  if (val > 10) {
    return 'Greater than 10';
  } else if (val < 5) {
    return 'smaller than 5';
  }

  return 'Betweeen 5 and 10';
}
console.log(testElseIf(7));

function testSize(num) {
  if (num < 5) {
    return 'Tiny';
  } else if (num < 10) {
    return 'Small';
  } else if (num < 15) {
    return 'Medium';
  } else if (num < 20) {
    return 'Large';
  } else {
    return 'Huge';
  }
}
console.log(testSize(7));

// Golf Score
let names = [
  'Hole-in-one!',
  'Eagle',
  'Birdie',
  'Par',
  'Bogey',
  'Double Bogey',
  'Go-home',
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
  return 'Change me';
}
console.log(golfScore(5, 4));

function caseInSwitch(val) {
  let answer = '';
  switch (val) {
    case 1:
      answer = 'alpha';
      break;
    case 2:
      answer = 'Beta';
      break;
    case 3:
      answer = 'gamma';
      break;
    case 4:
      answer = 'delta';
      break;
  }

  return answer;
}
console.log(caseInSwitch(3));

function switchOfStuff(val) {
  let answer = '';
  switch (val) {
    case 'a':
      answer = 'apple';
      break;
    case 'b':
      answer = 'bird';
      break;
    case 'c':
      answer = 'cat';
      break;
    default:
      answer = 'Stuff';
      break;
  }
  return answer;
}
console.log(switchOfStuff('a'));
console.log(switchOfStuff(5));

function sequentialSizes(val) {
  let answer = '';
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Middle';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
      break;
  }
  return answer;
}
console.log(sequentialSizes(7));

function chainToSwitch(val) {
  let answer = '';

  if (val === 'bob') {
    answer = 'Marley';
  } else if (val === 42) {
    answer = 'There is no #1';
  } else if (val === 99) {
    answer = 'Missed my by this muchi';
  } else if (val === 7) {
    answer = 'Ate Nine';
  }
  return answer;
}
// the same as code below

function chainToSwitchRefactoring(val) {
  let answer = '';

  switch (val) {
    case 'bob':
      answer = 'Marley';
      break;
    case 42:
      answer = 'The Answer';
      break;
    case 1:
      answer = 'There is no #1';
      break;
    case 99:
      answer = 'Missed me by this much!';
      break;
    case 7:
      answer = 'Ate Nine';
      break;
  }
}

// TODO:research for return function
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));
console.log(abTest(-2, 2));

function abTestTwoTimes(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTestTwoTimes(2, 2));
console.log(abTestTwoTimes(-2, 2));

let cardOfCount = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      cardOfCount++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      cardOfCount--;
      break;
  }

  let holdBet = 'Hold';
  if (cardOfCount > 0) {
    holdBet = 'Bet';
  }

  return cardOfCount + '' + holdBet;
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');
console.log(cc(4));

//Build JavaScript Objects examples
const ourDog = {
  name: 'Camper',
  legs: 4,
  tails: 1,
  friends: ['everything!'],
};

ourDog.name = 'Happy Camper';

const herDog = {
  name: 'Quincy',
  legs: 3,
  tails: 2,
  friends: [],
};

herDog.name = ['freeCodeCamp Campers'];

//Accessing Object Properties with Dot Notation
let testObj = {
  hat: 'ballcap',
  shirt: 'jersey',
  shoes: 'cleats',
};

let hatValue = testObj.hat;
let shirtValue = testOb.shirt;

const testObjSecond = {
  'an entree': 'hamburger',
  'my side': 'veggies',
  'the drink': 'water',
};

let entreeValue = testObjSecond['an entree'];
let drinkValue = testObjSecond['the drink'];

var testObj = {
  12: 'Namath',
  16: 'Montana',
  19: 'Unitas',
};

let playerNumber = 16;
let player = testObj[playerNumber];

//1:54:32~
//https://www.youtube.com/watch?v=PkZNo7MFNFg
