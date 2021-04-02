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
