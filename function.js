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
  friends: ['freeCodeCamp Campers'],
};

herDog.name = 'Happpy Coding';

//Accessing Object Properties with Dot Notation
let testObj = {
  hat: 'ballcap',
  shirt: 'jersey',
  shoes: 'cleats',
};

let hatValue = testObj.hat;
let shirtValue = testObj.shirt;
const testObjSecond = {
  'an entree': 'hamburger',
  'my side': 'veggies',
  'the drink': 'water',
};

let entreeValue = testObjSecond['an entree'];
let drinkValue = testObjSecond['the drink'];

var testObjThird = {
  12: 'Namath',
  16: 'Montana',
  19: 'Unitas',
};

let playerNumber = 16;
let player = testObj[playerNumber];

//1:54:32~
//https://www.youtube.com/watch?v=PkZNo7MFNFg

function phoneticLookup(val) {
  let result = '';

  let lookUp = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank',
  };
  // The same as meaning below
  // switch (val) {
  //   case 'alhpa':
  //     result = 'Adams';
  //     break;
  //   case 'bravo':
  //     result = 'Boston';
  //     break;
  //   case 'charlie':
  //     result = 'Chicago';
  //     break;
  //   case 'dalta':
  //     result = 'Denver';
  //     break;
  //   case 'echo':
  //     result = 'Easy';
  //     break;
  //   case 'foxtrot':
  //     result = 'Frank';
  //}
  result = lookUp[val];

  return result;
}
console.log(phoneticLookup('charlie'));

let myMusicList = [
  {
    artist: 'Billy Joel',
    title: 'Piano Man',
    releaseYear: 1973,
    formats: ['CD', '8T', 'LP'],
    gold: true,
  },
  {
    artist: 'Beau Carnes',
    title: 'Cereal Man',
    releaseYear: 2003,
    formats: ['Youtube Video'],
  },
];

//Nested Objects
let myStorage = {
  car: {
    inside: {
      gloveBox: 'maps',
      'passenger seat': 'crumbs',
    },
    outside: {
      trunk: 'jack',
    },
  },
};

const gloveBoxContents = myStorage.car.inside['gloveBox'];
console.log(gloveBoxContents);

//Nested Arrays
let myPlanets = [
  {
    type: 'flowers',
    list: ['rose', 'tulip', 'denadelion'],
  },
  {
    type: 'trees',
    list: ['fir', 'pine', 'birch'],
  },
];

let secondTreeTypeFlowers = myPlanets[0].list[1];
let secondTreeTypeTrees = myPlanets[1].list[1];
console.log(secondTreeTypeFlowers);
console.log(secondTreeTypeTrees);

let collection = {
  2548: {
    album: 'Slippery when Wet',
    artist: 'Bon Jovi',
    tracks: ['Let it Rock', 'You give Love a Bad Name'],
  },
  2468: {
    album: '1999',
    artlist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artlist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    album: 'ABBA Gold',
  },
};

let collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === '') {
    delete collection[id][prop];
  } else if (prop === 'tracks') {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}

updateRecords(2468, 'tracks', 'test');
console.log(updateRecords('5439', 'artist', 'ABBA'));

let ourArraysixThityThree = [];

for (var i = 0; i < 10; i += 2) {
  ourArraysixThityThree.push(i);
}

console.log(ourArraysixThityThree);

let ourArraysixThityNine = [];

for (var i = 1; i < 10; i += 2) {
  ourArraysixThityNine.push(i);
}

console.log(ourArraysixThityNine);

let ourArr = [9, 10, 11, 12];
let ourArrTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourArrTotal += ourArr[i];
}

console.log(ourArrTotal);

function multiplyAll(arr) {
  let product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[[i][j]];
    }
  }

  return product;
}

let product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);

let myArray = [];
let a = 10;

do {
  myArray.push(a);
  a++;
} while (a < 5);

console.log(a, myArray);

let contacts = [
  {
    firstName: 'Akira',
    lastName: 'Latine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0093123453',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0645212345',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: '0543334352',
    likes: ['JavaScript', 'games', 'Foxes'],
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    number: '0513532467',
    likes: ['Pizza', 'Sushi', 'potatos'],
  },
  {
    firstName: 'Phil',
    lastName: 'Heath',
    number: '0874563124',
    likes: ['Protein', 'Olympia', 'Workout'],
  },
  {
    firstName: 'Jonathan',
    lastName: 'Jorster',
    number: '0534753146',
    likes: ['Erina', 'Hamon', 'Caesal'],
  },
  {
    firstName: 'Akira',
    lastName: 'Smith',
    number: '0554326523',
    likes: ['Japanese', 'French', 'English'],
  },
  {
    firstName: 'tom',
    lastName: 'Ford',
    number: '0543236543',
    likes: ['Apparel', 'SunGrass', 'Coffee'],
  },
  {
    firstName: 'Lon',
    lastName: 'Herman',
    number: '0983235331',
    likes: ['Apparel', 'NewYork', 'Los Angeles'],
  },
];

function lookUpProfile(name, prop) {
  for (var ii = 0; ii < contacts.length; ii++) {
    if (contacts[ii].firstName === name) {
      return contacts[ii][prop] || 'No such property';
    }
  }
  return 'No such contact';
}

let data = lookUpProfile('Harry', 'lastName');
console.log(data);

let ramdomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);
console.log(myRandom);

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger('10011');
//no console

function checkSign(num) {
  return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}
console.log(checkSign(0));

let mycatName = 'quincy';
let quote;

myCatName = 'Beau';

function catTalk() {
  'use strict';

  myCatName = 'Oliver';
  quote = myCatName + 'says Meow!';
}
console.log(catTalk);

function checkScope() {
  'use strict';
  var iii = 'function scope';
  if (true) {
    iii = 'block scope';
    console.log('Block scopre iii is:', iii);
  }
  console.log('Function scope iii is:', iii);
  return iii;
}

console.log(checkScope());

function checkScopeSecond() {
  'use strict';
  let iiii = 'function scope';
  if (true) {
    let iiii = 'block scope';
    console.log('Block scope iiii is:', iiii);
  }
  console.log('Function scope iiii is', iiii);
  return iiii;
}
console.log(checkScopeSecond());

function printManyTimes(str) {
  'use strict';

  const SENTENCE = str + 'is cool!!';

  for (let iiiii = 0; i < str.length; iiiii += 2) {
    console.log(SENTENCE);
  }
}
// printManyTimes('FreeCodeCamp');
//Unlimit logs

const s = [5, 7, 2];

function editInPlace() {
  'use strict';

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s);

function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);

//Use arrow functions to write concise anonymouse functions
let magic = function () {
  new Date();
};

let magicArrow = () => new Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();
//↑() What do you mean?
console.log(increment(5, 2));
console.log(increment(5));

const sum905 = (function () {
  return function sum(x, y, z) {
    const arges = [x, y, z];
    return arges.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum905(1, 2, 3));

const sum913 = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum913(1, 2, 3, 4));

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
  // arr2 = arr1;
  arr2 = [...arr1];
  arr1[0] = 'potato';
})();
console.log(arr2);

let voxel = { x: 3.6, y: 7.4, z: 6.54 };

let x = voxel.x;
let y = voxel.y;
let z = voxel.z;

// const { x: a, y: b, z: c } = voxel;

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTmrw(avgTemperatures) {
  'use strict';

  const { tomorrow: tempOfTomorrow } = avgTemperatures;

  return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getMaxOfTmrw(forecast) {
  'use strict';

  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;

  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));
