//分割代入
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);

[a] = [10, 20, 30, 40, 50];
console.log(a);

[a, , b] = [10, 20, 30, 40, 50];
console.log(a, b);
//真ん中のvalueはskipされる

//初期値の設定方法
[a, , b, c = 1] = [10, 20, 30];
console.log(c);
//1

const { bb, aa, ...restRest } = { aa: 10, bb: 20, cc: 30, dd: 40 };
console.log(bb);
console.log(aa);
console.log(restRest);

function drawChartEs06({
  size = 'big',
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
}

drawChartEs06({
  coords: { x: 10, y: 30 },
  radius: 30,
});
