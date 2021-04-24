// javascriptのObjewctは大きく2種類
//①{}で定義するObject
//②コンストラクタでObjectを使用している、というObject

let obj = {};

let array = new Array();

//②コンストラクタでObjectを使用している、というObjectの例
obj.name = 'Tom';
// name propertyにTomというvalueがsetされる

obj.array = new Array();
obj.array = [1, '1'];

//ドット記法
//Objectの中にObjectを定義する
obj.obj = { name: 'Bob' };
//2つ目のobjの中身が入れ子（マトリョーシカ的なやつ）状態になり、name propertyにBobというvalueがsetされる

//nameを取り出す場合はこれでOK
obj.name;

//ブラケット記法
//上記のname propertyをgetできる（文字列のTomが取得できる）
obj['name'];

let name = 'obj';
//nameはvariable

obj[name];
//この場合はBobが取得できる

//--------------

//コンストラクタfunctionを使って複数のObjectを管理する
//同じようなobjを大量に作る時に使用する型的なもの

//例：名前と苗字を入れるobjectを作るとする時
let person = {
  first: 'Tom',
  last: 'Ford',
};

let person = {
  first: 'Tom',
  last: 'Ford',
};

let person = {
  first: 'Tom',
  last: 'Ford',
};
//これは長すぎる

//functionでpropertyを定義して、このfunctionをvariableを新たに定義すれば、
//繰り返し使っても修正が少しで済む
function factoryPerson(first, last) {
  let person = { first, last };
  return person;
}
// personというvariableを定義して、firstとlastという
// propertyを定義。これらを戻り値として返す関数を定義してる
//factory関数

let me = factoryPerson('Tom', 'Ford');
console.log(me);

//コンストラクタ関数（定番） "new演算子を使う"
//他の関数と差別化するために、先頭の文字を大文字にするという慣例がある。
//誰がみてもこれはコンストラクタ関数だ、とわかるようにする
function Person(first, last) {
  this.first = first;
  this.last = last;
}

let me = new Person('first', 'last');

//コンストラクタ関数の他の使い方
// 上に書いた関数に加えて、introduceという関数を持たせるとする

function Person(first, last) {
  this.first = first;
  this.last = last;
  this.introduce = function () {
    console.log('My name is ' + first + '' + last);
  };
}

let me0 = new Person('First', 'Last');
let me1 = new Person('Me1', 'Last');
me0.introduce();
me1.introduce();

//me0の書き換え
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.introduce = function () {
    console.log('My name is ' + first + '' + last);
  };
}

let me0 = new Person('First', 'Last');
let me1 = new Person('Me1', 'Last');

//me0を書き換える関数
me0.introduce = function () {
  console.log('I dont want to introduce myself.');
};
me0.introduce();
me1.introduce();

// 書き換える場合はprototypeを使うのがベスト
function Person(first, last) {
  this.first = first;
  this.last = last;
  //   this.introduce = function () {
  //     console.log('My name is ' + first + '' + last);
  //   };
}

//prototypeを関数として使う場合は、thisを先頭につける
Person.prototype.introduce = function () {
  console.log('My name is ' + this.first + this.last);
  //thisというのは、コンストラクタ関数、Personをポイントしている
};

let me0 = new Person('First', 'Last');
let me1 = new Person('Me1', 'Yade');
me0.__proto__.introduce = function () {
  // prototypeはインスタンス化されると、__proto__に格納されるので、あえてこのように書いてる（本来は非推奨！！prototypeでOK）
  console.log('I dont want to introduce myself.');
};
me0.introduce();
me1.introduce();

//new演算子
//空のibjectを生成して、そのあとにthisで始まるpropertyをコピーしている
//状態としてはこんな感じ
me0 = { first, last, introduce, __proto__ };
me1 = { first, last, introduce, __proto__ };

//prototype chainがわかってくると他の人が書いてるコードも読みやすくなっていく

//Prototypeと継承
//継承：少し違う機能を追加したり削除したり、変更したい時に使う
//今あるコンストラクタ関数から違うコンストラクタ関数を作るときに使う
function Person(first, last) {
  this.first = first;
  this.last = last;
}

function Japanese(first, last) {
  this.first = first;
  this.last = last;
  this.doSado = function () {};
}

Person.prototype.introduce = function () {
  console.log('My name is ' + this.first + '' + this.last);
};

let me = new Person('First', 'last');
me.introduce();

// ここまでのコードだと、this.firstとthis.lastが2つのfunction内で同じ記述をしているので、
// 冗長なコードになっている

//継承の書き方例①
function Person(first, last) {
  this.first = first;
  this.last = last;
}

function Japanese(first, last) {
  Person.call(this, first, last);
}
// callメソッド：第一引数に渡したものを、この関数内で実行される時に呼び出されたthisと同じものにする（bindする）
// ↑PersonのthisとJapaneseのthisは別物
//　Japaneseのインスタンス化（初期化）したthisと、Personの中身を実行したthisは同じものを使ってほしい、そこで明示的に示すのがcall
// japanese内の第二引数、第三引数はfunction Personのものをそのまま使う

Person.prototype.introduce = function () {
  console.log('My name is ' + this.first + '' + this.last);
};

let me = new Person('First', 'last');
me.introduce();

//継承の書き方例②
function Person(first, last) {
  this.first = first;
  this.last = last;
}

function Japanese(first, last) {
  Person.call(this, first, last);
  this.lang = 'ja';
}

//継承先と継承元をそれぞれvariableに入れる
Object.setPrototypeOf(Japanese.prototype, Person.prototype);

Person.prototype.introduce = function () {
  console.log('My name is ' + this.first + '' + this.last);
};

let me = new Japanese('First', 'last');
me.introduce();
