# querySerector

- document.querySelector('p')
  - JSのオブジェクト
  - CSSセレクタで記入する

- document.querySelector('all')

- innterHTML
  - 特定の要素ないのhtml要素を取得する

- textConntext

- innerTexT
  - 表示されている分のテキスト要素

- 特定のタグを作成する
  - document.creatElement('img')
  - imgタグを作成する

- appendChild
  - 子要素タグに追加する

```js
const a = document.getElement('id');
a.appendChild(newElement)
```

- append
  - テキストをそのまま適用できる

```js
const a = document.getElement('id');
a.append('newText')
```

- prepend
  - その要素の前に挿入する
  - <https://developer.mozilla.org/ja/docs/Web/API/Element/prepend>

- insertAdjacentElement
  - 兄弟要素で要素を挿入する
  - <https://developer.mozilla.org/ja/docs/Web/API/Element/insertAdjacentElement>

- after
  - <https://developer.mozilla.org/ja/docs/Web/API/Element/after>

- 練習問題解答
  - ボタンを100個作成する

```js
// ここにコードを書いてください：
const container = document.querySelector("#container");

for (let i = 1;i <= 100; i++) {
    const a = document.createElement("button"); // ループ外でボタンの作成処理を書いてしまうと、参照先を複製するだけになってしまうので、ループ内で作成処理を行う
a.innerText = 'sample';
    container.appendChild(a);
}
```

- 子要素を削除する
  - removeChild
  - remove
