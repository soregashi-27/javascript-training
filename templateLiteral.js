//テンプレートリテラル
let name = 'Tom';
let str = `Hello\n${name}`;
console.log(str);

//コード例
// function b(strings, ...values) {
//   console.log(strings);
//   console.log(values);
//   return strings.reduce((accu, str, i) => {
//     let val = values[i] ? `<b>${values[i]}</b>` : '';
//     return `${accu}${str}${val}`;
//   }, '');
// }

function b(strings, ...values) {
  console.log(strings);
  console.log(values);
  return strings.reduce((accu, str, i) => {
    let val;
    console.log(`${accu}${str}${val}`);
    val = values[i] ? `<b>${values[i]}</b>` : '';
    return `${accu}${str}${val}`;
  }, '');
}
// 日本語では、変数の巻き上げ？と言うらしい https://bit.ly/3g9G4cO

const str1 = 'Bob';
const str2 = 'Tommy';
const result = b`${str1} and ${str2}`;
// const result = `${str1} and ${str2}`;
console.log(result);
