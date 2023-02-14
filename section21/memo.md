- thisについて
  - thisの値はthisを使っている関数がどのように呼ばれたかに依存する

```js
const cat = {
    name: 'たま',
    cry() {
        console.log(`${this.name}がにゃーと泣きました`) // this=catオブジェクト
    }
}

const cry2 = cat.cry() //this=windowsオブジェクト
```

- try、catch
  - エラーが起きるとその行より下のコードは実行されない

```js

function sample(message) {
    try {
    message = message.toUpperCase();
    } catch(e) {
        consoele.log(e)
        console.log('正しくメッセージを取得できないです')
    }
}

sample() // 数字が入るとエラーになる
```
