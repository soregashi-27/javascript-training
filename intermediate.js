//Google Chrome Consoleに入力しながらの確認がおすすめ
// アロー関数
function timesTwo(i) {
  return i * 2;
}
const res = timesTwo(2);
console.log(res);

const timesTwoEightSteps = function (ii) {
  return ii * 2;
};
const resElevenSteps = timesTwoEightSteps(2);
console.log(resElevenSteps);

const timesTwoFourTeenSteps = (iii) => {
  return iii * 2;
};
const resSevenTeenSteps = timesTwoFourTeenSteps(2);
console.log(resSevenTeenSteps);

const timesTwoTwentySteps = (iiii) => iiii * 2;
const resTwentyThree = timesTwoTwentySteps(2);
console.log(resTwentyThree);

//Syntax rules
let arrowFn;
arrowFn = () => 42;
arrowFn = (x) => 42; //()の省略が可能。lintterの影響で()が追加された
arrowFn = (x) => 42;
arrowFn = (x, y) => 42;
arrowFn = (x, y) => {
  console.log(x + y);
  return x + y;
};

//binding "this"
let normalFn;
normalFn = {
  id: 27,
  counter: function () {
    console.log(this.id);
    //オブジェクトが参照→normal

    // window.setTimeout(function () {
    //   console.log(this.id);
    //   //undefined
    // }, 5000);
  },
};
normalFn.counter();

let normalFnFiftyOne;
normalFnFiftyOne = {
  id: 27,
  counter: function () {
    console.log(this);

    // window.setTimeout(
    //   function () {
    //     console.log(this);
    //   }.bind(this),
    //   1000
    // );
  },
};
normalFnFiftyOne.counter();

//アロー関数で書き換え normalFnFiftyOneのコードよりも見た目がスッキリして可読性が上がる
let normalFnFiftyOneArrow;
normalFnFiftyOneArrow = {
  id: 27,
  counter: function () {
    console.log(this);

    // window.setTimeout(() => {
    //   console.log(this);
    // }, 1000);
  },
};
normalFnFiftyOneArrow.counter();

//thisの参照だけ保持
let normalFnSixtyNine;
normalFnSixtyNine = {
  id: 27,
  counter: function () {
    console.log(this);
    let _that = this; //参照

    // window.setTimeout(function () {
    //   console.log(_that);
    // }, 1000);
  },
};
normalFnSixtyNine.counter();

//Question inner, outer, globalのどれが出力されるのか？
//arrow functionを使うとthisを作らない

// window.me = 'global';
const outer = function () {
  let me = 'outer';
  return {
    me: 'inner',
    say: () => {
      console.log(this.me);
      //objectが作られた状態でそのobjectを無視する
    },
  };
};
outer().say();

//*-------------Thisの解説-------------*
let myObj = {
  id: 2,
  printId() {
    console.log(this.id);
  },
};
myObj.printId();

const sayFoo = function () {
  console.log(this['foo']);
};

foo = 'foo';
//global objectのvariable
//let constを省略して、variableを定義する時、functionないでもGlobal Objectとなる。
//しかしバグを生むので基本非推奨。

// let foo = 'foo'
// これが一般的。

const mySecondObj = {
  foo: "I'm in the obj",
  sayFoo,
};
sayFoo(); //foo

const mySecondObj140 = {
  foo: 'I am object',
  sayFoo,
};

mySecondObj140.sayFoo();

//
function myObj147(id) {
  this.id = id;
}

myObj147.prototype.printId = function (id) {
  console.log(this.id);
};

// const newInstance = new myObj147(5);

//ES6 class
//myclassはインスタンス化されたObjectを指す
class myClass {
  constructor(id) {
    this.id = id;
  }

  printId(id) {
    console.log(this.id);
  }
}
const newInstance = new myObj147(5);

//Question thisは何を示しているのか
const outer51 = {
  func1: function () {
    console.log(this);
    //outer51を参照

    const func2 = (function () {
      console.log(this);
      //functionが入れ子状態になると、このthisはglobal objectを参照することになる。この場合はwindow object

      const func3 = (function () {
        console.log(this);
        //これもfunc2と同じ要領
      })();
    })();
  },
};
// outer51.func1();

//functionが入れ子状態でも、指定したobjectを使いたい場合（func2の場合）
const outer52 = {
  func1: function () {
    console.log(this);
    //outer51を参照

    let _that = this;

    const func2 = (function () {
      console.log(_that);

      const func3 = (function () {
        console.log(this);
        //これもfunc2と同じ要領
      })();
    })();
  },
};
// outer52.func1();
