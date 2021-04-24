//Google Chrome consoleでlogを確認したほうが処理の理解がしやすい

// callback, promise, await-sync
//非同期処理のプログラミングは強力な処理に変わる

//サーバー取得
// const res = getDataFromServer();

//取得したデータを加工
// res.doSomething();

// 全く関係ないほかの処理
// doSomethingElse();

///3秒後にcallback functionが実装される
function wait(callback, num) {
  setTimeout(() => {
    console.log(num);
    callback();
  }, 3000);
}

//CASE1
// wait(() => {
//   console.log('callback function is called');
// }, 0);

//CASE2
// wait((num) => {
//   num++;
//   wait((num) => {
//     num++;
//     wait((num) => {
//       num++;
//     }, num);
//   }, num);
// }, 0);

// Promiseについて
// resolve, reject
// resolveが呼ばれたタイミングで次の処理が動く
// rejectはエラーが出た時に呼ばれる
// 呼ばれたあとの処理はthenメソッドを使う
function wait(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(num);
      resolve(num);
    }, 100);
  });
}
wait(0)
  .then((num) => {
    num++;
    wait(num);
    return num;
    //waitの完了を待たずに次のthenメソッドへ移る
  })
  .then((num) => {
    num++;
    return wait(num);
  })
  .then((num) => {
    num++;
    return wait(num);
  })
  .then((num) => {
    num++;
    return wait(num);
  })
  .then((num) => {
    num++;
    return wait(num);
  });

//Promiseでthenメソッドを使って非同期処理をつなげたい場合
wait(0).then((num) => {
  num++;
  wait(num);
  return wait(num);
});

//2を返すタイミングでエラーとする
//エラーを出さないために、.catchメソッドを使う

function wait(num84) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(num84);
      if (num84 === 2) {
        reject(num84);
      } else {
        resolve(num84);
      }
    }, 100);
  });
}
wait(0)
  .then((num84) => {
    num84++;
    wait(num84);
    return wait(num84);
  })
  .then((num84) => {
    num84++;
    wait(num84);
    return wait(num84);
  })
  .catch((num84) => {
    num84++;
    consoile.error(num84, 'error');
  });

//並列処理
function wait(num114) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(num114);
      if (num114 === 3) {
        reject(num114);
      } else {
        resolve(num114);
      }
    }, 100);
  });
}

Promise.all([wait(1000), wait(1500), wait(3000)]).then((num114) => {
  console.log(num114);
});

//処理が終わったら、その次に処理が起こる（同時ではない）
Promise.race([wait(1000), wait(1500), wait(3000)]).then((num114) => {
  console.log(num114 + 1005);
});

//awaitとasync
async function sample() {
  const num = await asyncFn();
  num++;
  return num;
}

asyncFn(0).then((num) => {
  num++;
  return num;
});

//awaitをfunction内で使った場合、functionの先頭にはasyncをつける
//await 非同期処理
async function sample() {
  const num = await asyncFn();
  num++;
  return num;
}

asyncFn(0).then((num) => {
  num++;
  return num;
});

//ロジックの例
function wait(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(num);
      if (num === 2) {
        reject(num);
      } else {
        resolve(num);
      }
    }, 100);
  });
}

// Promiseで使うthenと同じ機能がある
// function init() {
//     await wait(0);
// }

//違う例, numをincreament
// increament: 段階的に増えていくイメージに近い
async function init() {
  let num = await wait(0);
  num++;
  num = await wait(num);
  num++;
  num = await wait(num);
  num++;
  num = await wait(num);
  num++;

  return num;
}
init();
//2が呼ばれる段階でrejectが呼ばれる 163stepsを参照

//try, catchでエラーを受ける
async function init() {
  let num = 0;
  try {
    num = await wait(num);
    num++;
    num = await wait(num);
    num++;
    num = await wait(num);
    num++;
  } catch (error) {
    throw new Error('Error is occured', error);
  }

  return num;
}
init();
// console.log(init());

//promiseで値を自分で指定してもOK
async function init() {
  let num = 0;
  try {
    num = await wait(num);
    num++;
    num = await wait(num);
    num++;
    num = await wait(num);
    num++;
  } catch (error) {
    throw new Error('Error is occured', error);
  }

  return new Promise(() => {
    console.log('Define Promise');
  });
}
init();
// console.log(init());

async function init() {
  let num = 0;
  try {
    num = await wait(num);
    num++;
    num = await wait(num);
    num++;
    // num = await num;
    // num++;
  } catch (error) {
    throw new Error('Error is occured', error);
  }
  return num;
}
init().then((num) => {
  console.log(num, 'End');
});
