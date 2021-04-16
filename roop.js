//ループ

//配列 and Object
const data = [1, 4, 2, 5, 3];
const fruits = { banana: 'banna', apple: 'ringo', orange: 'orengi' };

Object.prototype.addtionalFn = function () {};

// let keyFruits = Object.keys(fruits);
// for (let i = 0; i < keyFruits.length; i++) {
//   console.log(i, fruits[keyFruits[i]]);
// }

// for (let i of keyFruits) {
//   //   if (data.hasOwnProperty(i)) {
//   //   console.log(i, fruits[i]);
//   console.log(i, fruits[i]);
//   //   }
// }

let keyFruits = Object.entries(fruits);
for (let [k, v] of keyFruits) {
  console.log(k, v);
}

// for each文
//上記のconst dataも使ってる
const fruitsNumber = { banana: 2, apple: 3, orange: 1 };

data.forEach((value, index, array) => {
  console.log(value, index, array);
});

const newData = data.map((value, index, array) => {
  return value * 2;
});
console.log(data);
console.log(newData);
//1,4,2,5,3
//2,8,4,10,6

//mapメソッド
const newDataSecond = data.map((value, index, array) => {
  return value + 'aaa';
});
console.log('data', Object.keys(fruits));
console.log('NewData', newDataSecond);
// data [ 'banana', 'apple', 'orange' ]
// NewData [ '1aaa', '4aaa', '2aaa', '5aaa', '3aaa' ]

// filterメソッド
const newDatathird = data.filter((value, index, array) => {
  return value === 1;
});
console.log('data', data);
console.log('NewData', newDatathird);
// NewData [ 1 ]

//reduceメソッド
const newDataForth = data.reduce((accu, curr) => {
  console.log(accu, curr);
  return accu + curr;
});
console.log('data', data);
console.log('newdata', newDataForth);
// 1 4
// 5 2
// 7 5
// 12 3
// data [ 1, 4, 2, 5, 3 ]
// n ewdata 15

//sort 並びが変わる 2つのargumentの差分を取る
const newDataFifth = data.sort((a, b) => {
  return a - b;
  //   return b - a;
});
console.log('dataFifth', data);
console.log('newDataFifth', newDataFifth);
//1,2,3,4,5

//メソッドチェーンで処理を変更することができる
const newDataSix = data
  .map((v) => v + 1)
  .sort((a, b) => {
    return a - b;
  });
console.log('dataSix', data);
console.log('newDataSix', newDataSix);
