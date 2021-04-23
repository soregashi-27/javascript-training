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
//6:15~スタート
