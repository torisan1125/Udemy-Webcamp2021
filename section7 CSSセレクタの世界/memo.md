- グローバルセレクター
  - 全ての要素を指定する

```css
* {
    color: black;
}
```

- 要素型セレクター

```css
button {
    color: pink;
}
```

- セレクターリスト
  - 複数のセレクターを指定する

```css
h1, h2 {
    color: blue;
}
```

- IDセレクタ
  - 要素の一意のIDを指定する方法

```css
#signup {
    color: syan;
}
```

- クラスセレクター
  - 複数の要素についてCSSを適用させたいとき

```html
<span class="class">class</span>
```

```css
.class {
    color:red;
}
```

- オプションを押しながらだとマルチカーソルができる

- 子孫セレクター
  - 特定の要素の中にある要素に対して適用させる

```css
li a {
    color: gray;
}
/* クラスセレクタ、IDセレクタも子孫セレクタを指定することができる */
.post a {
    color: gray;
}
```

- 隣接セレクタ
  - 同じ親要素の子同士で`<h1>`の直後の`<p>`を選択する

```css
h1 + p {
    color: red;
}
```

- 直下セレクタ
  - divタグの直下のpタグに適用させる

```css
div > p {
    color: blue;
}
```

- 属性セレクタ
  - type属性がtextのinputタグをずべて選択する
  - [属性セレクタ](https://developer.mozilla.org/ja/docs/Web/CSS/Attribute_selectors)

```css
input[type="text"] {
    width: 300px;
    color: yellow;
}

input[name="text"] {
    width: 300px;
    color: yellow;
}
```

- 擬似クラス
  - セレクターに付加するキーワードであり、選択された要素に対して特定の状態を指定する
  - [MDN](https://developer.mozilla.org/ja/docs/Web/CSS/Pseudo-classes#:~:text=CSS%20%E3%81%AE%E6%93%AC%E4%BC%BC%E3%82%AF%E3%83%A9%E3%82%B9%20)
  - ex:`:hover`、`:checked`、`:ntn-child(数字)`リストの中の特定の順番のリストについて適用させる、、、
  - 偶数番目に適用させる `:ntn-child(2n)`

```css
button:hover {
    background-color: blue
}
```

- 擬似要素
  - [MDN](https://developer.mozilla.org/ja/docs/Web/CSS/Pseudo-elements#:~:text=CSS%20%E3%81%AE%20%E6%93%AC%E4%BC%BC%E8%A6%81%E7%B4%A0%20)

```css
// １文字目についてフォントを指定する
h2::first-letter {
    font-size:50px
}
```
