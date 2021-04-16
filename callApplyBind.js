//call, Apply, Bindの使い方

//call
function greet() {
  let hi = `Hi, ${this.name}`;
  console.log(hi);
}

let obj = { name: 'Tom' };
greet.call(obj);

function greetTwelveSteps() {
  console.log(arguments);
  let yo = `Hi, ${this.name}`;
  console.log(yo);
}
let objSevenTeenSteps = { name: 'Bob' };

greetTwelveSteps.call(objSevenTeenSteps, 1, 2, 3);

//callback argument
const array = [1, 2, 3, 4];

function greetArray() {
  console.log(arguments);
  let sliceArray = [].slice.call(arguments, 0, 1);
  console.log(sliceArray);
}

function applyMethod(id, id2, id3) {
  console.log(arguments);
  let sliceArray = [].slice.call(arguments, 0, 1);
  console.log(sliceArray);
}

const array38 = [1, 2, 3, 4];

console.log(Math.min.apply(null, array38));
//1

//bind chrome consoleで動かす
let bindObj = {
  id: 27,
  print() {
    console.log(this);
    setTimeout(
      function () {
        console.log(this.id);
      }.bind(this),
      1000
    );
  },
};
bindObj.print();

let bindObj56 = {
  id: 27,
  print() {
    console.log(this);
    let _that = this;
    setTimeout(function () {
      console.log(_that);
    }, 1000);
  },
};
bindObj56.print();
