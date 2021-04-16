//google chrome consoleでの確認推奨

//クロージャーについて
//クロージャ-とは:関数とその関数が宣言されたレキシカルスコープの組み合わせ
//参考　https://bit.ly/3trtRUs

//scope
function func() {
  let value = 1;
  console.log(value);
}
func();
// console.log(value);

//クロージャーの例
function func13() {
  let value = 1;

  function inner() {
    console.log(value);
  }
  inner();
}
func13();

//↓ valueが変更できる
function func25() {
  let value = 1;
  function inner() {
    value++;
  }
  inner();
  console.log(value); //2
}
func25();

//クロージャー、モジュールパターン chrome consoleでチェック
// let module = (function () {
//   let count = 0;

//   return {
//     increment: function () {
//       count++;
//     },
//     show: function () {
//       console.log(count);
//     },
//   };
// })();

// module.show();

// module.increment();
// module.show();

// console.log(count);

//クロージャー　ダメなパターン chrome consoleでは1としか表示されない
// increment();
// increment();
// increment();

// function increment() {
//   let counter = 0;
//   counter += 1;
//   return counter;
// }

//OKなパターン
counter = 0;
increment();
increment();
increment();

function increment() {
  counter++;
  console.log(counter);
  //1,2,3
}

//クロージャーの例３
function addStringFactory(tail) {
  return function (str) {
    return str + tail;
  };
}

let addAs = addStringFactory('AAA');
let addBs = addStringFactory('BBB');

let str = 'Tom';
str = addAs(str);
// str = addBs(str);s
console.log(str);
