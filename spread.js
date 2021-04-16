//スプレッド構文

function sum(x, y, z) {
  return x + y + z;
}
console.log(sum(1, 2, 3));

const numbers = [1, 2, 3];
console.log(sum(...numbers));

console.log(sum.apply(numbers));
//NaN

console.log(sum.apply(null, numbers));

//2つをつなぐ
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr3 = arr1.concat(arr2);
arr4 = [...arr2, ...arr1];
arr5 = [...arr2, 10, ...arr1];

console.log(arr3);
console.log(arr4);
console.log(arr5);

//文字と数字の2つをつなぐ
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'boo', y: 13 };

let cloneObj = { ...obj1 };
let mergedObj = { ...obj1, ...obj2 };
let cloneCloneObj = { obj1 };

console.log(cloneObj);
console.log(mergedObj);
console.log(cloneCloneObj);
console.log(cloneObj.foo);
console.log(mergedObj.foo);
console.log(mergedObj.foo, mergedObj.y);

//shift
let a = [[1], [2], [3]];
let b = [...a];
b.shift().shift(); //1

console.log(b.shift().shift()); //2
console.log(a.shift().shift()); //undefined

//rest parameters：引数を3点ドットを使って定義する場合の関数
// ※TypeError: Reduce of empty array with no initial value | in vscode上
// let theArgs = [1, 2, 3];

// function sum(...theArgs) {
//   return theArgs.reduce((previous, current) => {
//     return previous + current;
//   });
// }
// console.log(sum);

//arguments [propertyにargumentのaが与えられる]
function f(a) {
  let args = Array.prototype.slice.call(arguments, f.length);
  console.log(args);
}
f(1, 2, 3); //2,3
console.log(f.length);

//上のfunctionはこれに同じ
function ff(a, ...args) {
  console.log(args);
}
ff(1, 2, 3);
