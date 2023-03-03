## 269 Promiseを使ったダミーリクエスト

- Promiseは非同期処理の最終的な完了もしくは失敗した場合使用するオブジェクト

- promise3つの状態
  - pending- 未解決
  - resolved- 解決済み
  - rejected- 拒否
  - fullfilled　満たされた状態

- pending状態でPromiseStateが作成される

- 処理が成功際にPromiseStateがResolveedに変わりthenに書かれた処理が実行される
- 処理が失敗した場合はPromiseStateがrejectedに変更しcatchに書かれた処理が実装される

- Promiseの書き方

Promiseインタンスの作成

```js
// resolve、rejectは失敗の処理を記入する
const promise = new Promise((resolve, reject) => {});


// reoleveを呼び出すことによって。PromiseStatusがresolvedになる
// resolve状態になった場合、その後のthenの処理が走る
const promise = new Promise((resolve) => {
    resolve();
}).then(() => {
    console.log("resolveしたよ")
})

// rejectを呼び出すことによって。PromiseStatusがresolvedになる
// reject状態になった場合、その後のthenの処理が走る
const promise = new Promise((resolve) => {
    reject();
}).then(() => {
    console.log("resolveしたよ")
}).catch(() => {
    console.log("rejectしたよ")
})


// resolveをしたときに、thenの処理のValに渡される

const promise = new Promise((resolve, reject) => {
  resolve("test");
})
  .then((val) => {
    console.log(`then1: ${val}`);
    return val;
  })
  .catch((val) => {
    console.log(`catch: ${val}`);
    return val;
  })
  .then((val) => {
    console.log(`then2: ${val}`);
  });

// then1: test
// then2: test

// resolveをしたときに、thenの処理のValに渡される

const promise = new Promise((resolve, reject) => {
  resolve("test");
})
  .then((val) => {
    console.log(`then1: ${val}`);
    return val;
  })
  .catch((val) => {
    console.log(`catch: ${val}`);
    return val;
  })
  .then((val) => {
    console.log(`then2: ${val}`);
  });

// then1: test
// then2: test
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {

        const rand = Math.random();

        setTimeout(() => {
            if (rand < 0.7) {
                resolve('ダミーデータです'); 
                return; // resolveの後にはreturnを忘れない、rejectを実行させないために、もしくはelseを使用してrejectを通さないようにする
            }
            reject('コネクションタイムアウト');
        }, 1000)
    });
}

fakeRequest('/hoge')
    .then((data) => { // then(コールバック関数)
        console.log(data); // resolveのパラメータがdataに入ってくる
    })
    .catch((message) => { // catch(コールバック関数)
        console.log(message); // rejectのダミーデータがmessageに入ってくる
    })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000) // Promiseオブジェクトが暗黙的にreturnされる、その中でthenオブジェクトを使って連結する
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .catch(console.log('エラー'))
```

## async(アシンク、エイシンク)

- Promiseよりも後に追加されたスッキリかける新しい構文
- Promiseのシンタックスシュガー
- Promiseを知らないとわからないので、Promiseを扱った。




### 272 async

- asyncな関数は必ずPromiseを返す
- 関数が値を返せば、Promiseはその値でresolveする
- 関数でエラーをthrowした場合Promiseはそのエラーでrejectする

```js
const sing = async (userName) => {
    if(!userName) {
            throw new Error('問題が起きました')
    }
    return 'test';
} // Promiseが返ってくる

sing().then((data) => {
    console.log('成功 :' data);
}) // returnでresolveの状態で返される
.catch((err) => {
    console.log('エラー：' err);
}) // throwから飛ばされる、reject状態 出力「エラー：問題が起きました」
```

### 273 awaitキーワード

- awaitはasync関数の中でしか使えない

- awaitはPromiseがresolveまたはrejectするまでasync関数の実行を一時的に停止する

