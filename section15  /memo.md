- 文字列の切り取り
  - slice

- 文字の取り替え
  - replace
  - a.replace('取り替えたい単語', '取り替え後の文字列'

- テンプレートリテラル
  - `I am ${JSの式}`
  - {}内のJSの式が評価されてしまう。

- Math.floor(数)
  - 小数点の切り捨て

- Math.random()
  - 0~1までの浮動小数点をランダムで返す

- 0~10までの整数をランダムで取得したいとき

```js
// 1~10までの整数を取得したいとき
Math.floor(Math.random * 10) + 1
// 20~22までの整数を取得したい時
Math.floor(Math.random * 3) + 20
// Math.floor(Math.random * {取得したい整数の幅}) + {A~Bまで整数を取得したいときのAに当たる数、スタート地点}
```
