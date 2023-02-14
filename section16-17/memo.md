- concat…配列の結合
- includes()→配列の中に指定の要素が含まれているか
- indexOf()→配列の中に指定した要素がある場合はindexが返ってくる
- Array.reverce()→要素の逆順
  - 破壊的メソッド

- slice→配列をインデックスから指定した部分に対してスライスする
- splice→既存の配列に対して、特定の要素を間に追加したりする
  - 破壊的メソッド

```js
Array.splice(4, 1, 'red')
// index4の部分を1個削除して、要素redを挿入する
```

- 配列の等価性
  - 配列は参照先が等しい時等しくなる

```js
let a = [];
let b = [];
let aCopy = a

a === b // false
aCopy = a //true

a.push(1);
// aCopyも[1]になる
```

- const
  - 配列の再代入はできない
  - 配列に新しい要素を加える分には問題ない

- shift→先頭の追加
- pop→末尾の削除
- push→末尾の追加
- unshift→先頭の削除
