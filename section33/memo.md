
```js
// https://expressjs.com/ja/4x/api.html
const express = require('express');
const app = express();

// リクエストが来るたびに呼ばれるuseメソッド
// 第一引数にはリクエストのオブジェクトが入る、第2引数にはレスポンスのオブジェクトが入る

// app.use((req, res) => {
//     console.log('リクエストを受け付けました。')
//     console.log(req);
//     res.send('<h1>初めてのレスポンス</h1>') // レスポンスボディを設定できる
// })

// ポートを指定して、リクエストを行う
app.listen(3000, () => {
    console.log('リクエストをポート3000で待受中')
});


// ルーティング
// localhost:3000/catsにリクエストを飛ばして実行される
// ルーティングは上からマッチングされる
app.get('/cats', (req, res) => {
    console.log('catsにリクエストきました')
    res.send('にゃー');
});

app.get('r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`${subreddit}、${postId}`);
})

// クエリストリングの使い方
app.get('cats', (res, req) => {
    const { q }= res.query; // クエリストリングはqueryプロパティでオブジェクトの形で受け取る
    res.send(`クエリストリング→${q}`)
})

// not foundについての対応
// 一番下でマッチング
// 全てのURLに対応する
app.get('*', (req, res) => {
    res.send('マッチするページは存在しない');
})


// ファイル監視のパッケージ
// npm i -g nodemon
// nodemon 監視したいファイル →ファイルに変更があるたびにサーバーを再起動し、変更を反映させる。
```
