# DOMイベント

- インラインイベント
  - タグの中でJSを呼び出す方法
  - htmlとかと識別性が低くなるためアンチパターン

```html
<button onClick="console.log('晴れ')">ボタン</button>
```

- ondblclick属性
  - ボタンをダブルクリックを使用した際に実行される処理

# イベントとthis

普通の関数内のthisについてはそれが定義された元の要素となる

アロー関数はそれが定義されている周りのスコープを指すことになる

都度console.logを入れてthisの正体を調べた方がいい

```js

const h1 = document.querySelector('h1')

// h１要素を仮にclickした場合の処理
h1.addEventListener('click', funciton(){
    console.log(this); //　出力 h1要素
});


h1.addEventListener('click', () => {
    console.log(this); // 出力Windowsオブジェクト 
});
```

## キーボードイベントとイベントオブジェクト

- イベントを検知した場合、イベンtのオブジェクトが渡される
  - eventの中にどのようなキーが押されたのかなどのイベントの詳細情報が入ってくる
- `keydown`
  - キーボードが押された時
  - key→実際に渡られた入力値
  - code→実際に押された場所（US配列）
- `keyup`
  - キーボードが手が離れた時

```js
h1.addEventListener('keyup', funciton(){
    console.log(this); //　出力 h1要素
});
```

## イベントのバブリング

- stoppropagationを実行して、イベントのバブリングを防ぐ

## イベントのデリゲーション

- あとから追加してきた要素に対して、特定のイベントが発生しない場合がある
- そのイベントを親要素に対してイベントの委譲を行うことで後から追加してきた要素に対してもイベントを実行する
- <https://ja.javascript.info/event-delegation>
