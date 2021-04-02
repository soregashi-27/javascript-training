console.log('Hello world from javascript');
// let myName = 'Ben';

// myName = 8;

let ourName = 'JavaScript-training';

const pi = 3.14;
// console.log(myName);

let sum = 10 + 10;
console.log(sum);

// let ourStr = 'I come first.';
// ourStr += 'I come second.';

// let myStr = 'This is the first sentence.';
// myStr += 'This is the second sentence.';
// console.log(myStr);

let yourName = 'JavaScript training';
let ourStr = 'Hello, our name is' + yourName + ', how are you doing?';

let myName = 'Beau';
let myStr = 'My name is' + myName + 'and I am welly!';
console.log(myStr);

let anAdjective = 'Awesome';
let ourString = 'JavaScript training is ';
ourString += anAdjective;
console.log(ourString);

let someAdjective = 'Worthwhile';
let myString = 'Learning to code is ';
myString += someAdjective;
console.log(myString);

let firstNameLength = 0;
let firstName = 'Ada';
firstNameLength = firstName.length;
console.log(firstNameLength);
//3

let laseNameLength = 0;
// let lastName = 'LoveCoding';

// laseNameLength = lastName.length;
// console.log(laseNameLength);

let firstLetterOfFirstName = '';
let FirstName = 'Ada';

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

let firstLetterOfLastName = '';
let lastName = 'Love coding';

firstLetterOfLastName = lastName[5];

console.log(firstLetterOfLastName);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  let result = '';
  result +=
    'The ' + myAdjective + myNoun + '' + myVerb + ' to the store ' + myAdverb;
  return result;
}

console.log(wordBlanks('dog', 'big', 'ran', 'quickly'));
console.log(wordBlanks('dog', 'slow', 'flew', 'quickly'));

let ourArray = [['The universe', 42], ['everything, 101010']];
let myArray = [['Bulls', 23], ['White Sox, 45']];

let herArray = ['stimpsion', 'J', 'cat'];
herArray.push(['happy', 'Joy']);
console.log(herArray);

let himArray = [
  ['Bob', 23],
  ['cat', 2],
];
himArray.push(['love', 'Coding']);
console.log(himArray);

let eightySevenArray = [1, 2, 3];
let removedFromEightySevenArray = eightySevenArray.pop();
// terminal views [1,2]
console.log(eightySevenArray);

let ninetyTwoArray = [['Bob, 23'], ['cat', 2]];
let removedFromNineTwoArray = ninetyTwoArray.pop();
console.log(ninetyTwoArray);

let ninetySixArray = ['Stimpson', 'J', 'Dog'];
ninetySixArray.shift();
ninetySixArray.unshift('happy');
console.log(ninetySixArray);

let oneHundredOneArray = [
  ['John', '27'],
  ['Cat', 3],
];
oneHundredOneArray.shift();
oneHundredOneArray.unshift(['Logan', 35]);
console.log(oneHundredOneArray);

let myList = [
  ['cereal', 3],
  ['milk', 2],
  ['bananas', 3],
  ['juice', 2],
  ['eggs', 10],
];
