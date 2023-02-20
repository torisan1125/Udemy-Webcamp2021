# 概要

- forEachメソッド

```js

const numbers = [1,2,4]

numbers.forEach(function (number) {
    console.log(number);
});

// 以下の文章と同意
for (number of numbers) {
    console.log(number);
}
```

- map
  - 与えられた配列に対して生成された新しい配列をそのまま返す

```js
const numbers = [1,2,3];

const newNumbers = numbers.map((number) => number * 2)
```

- setTimeOut
  - ミリ秒 3000　→ 3秒
  - セッティングした時間後に一回処理を実行する

```js
setTimeOut(関数,　秒数)
```

- setInterval
  - 特定のタイムスパンで特定の処理を繰り返す

```js
const id = setInterval(関数,秒数)
clearInterval(id) // 作業の繰り返しの削除
```

- filterメソッド
  - 提示された新しいテスト関数を満たす要素からなる新しい配列を生成する

- someとeveryメソッド
  - some→配列の要素に一つてもテスト関数を満たす要素があればtrueを返す
  - every→配列の全ての要素がテスト関数を満たしている場合にtrueを返す

```js
const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];
words.some(word => word.include('cake')); // true、単語にcakeを含むような単語は存在するか
words.every(word => word.include('cake')); // false、全ての要素がcakeが含む単語は存在するか
```

- reduce
  - reduceメソッド
  - 配列の合計数を計算する

```js
// 最初のtotalについては配列の最初の要素になる「
// 次のtotalには一つ前のtotal + priceの値になる
prices.reduce((total,price) => total + price);
prices.reduce((total,price) => total + price, 50); //初期値を与えることもできる
// 最小値を知りたい場合
// minとpriceを何回も比較する
prices.reduce((min, price) => {
    if (min > price) {
        return price;
    }
    return min;
})
```

- アロー関数のthis
  - アロー関数のthisについては関数が定義された段階でthisを確定する
  - 普通はその処理の実行時、呼び出ししている時点でthisを特定する
