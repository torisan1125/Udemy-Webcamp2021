- `prototype`
  - あらゆるものの雛形のオブジェクト
  - ここにプロトタイプのメソッドが含まれている

- __proto__がprototypeへの参照、矢印を示している

```js
Array.prototype.pop = function() {
    return '要素の取り出しは禁止！';
}
```

- extends
  - 親クラスを継承する

- super
  - 親クラスのメソッドを使用する…例：`super.hello()`
  - 親クラスのコンストラクタを使用する場合は単に`super（）`を使用する

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>sample1</title>
  <script type="text/javascript">
    // Animal クラスの定義
    class Animal {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      hello() {
        console.log("私の名前は" + this.name + "です。歳は" + this.age + "歳です。");
      }
    }
    // Animal クラスを継承した Human クラスを定義
    class Human extends Animal {
      constructor(name, age, hobby) {
        // 親クラスのコンストラクタを呼び出す
        super(name, age);
        this.hobby = hobby;
      }
      hello() {
        // 親クラスのメソッドを呼び出す
        super.hello();
        console.log("さらに私の趣味は" + this.hobby + "です。");
      }
    }
    // Animalクラスのインスタンスを作成し、メソッドを実行
    let cangol = new Animal("カンガルー", 30);
    cangol.hello();
    // Humanクラスのインスタンスを作成し、メソッドを実行
    let taro = new Human("鈴木一郎", 45, "ベースボール");
    taro.hello();
  </script>
</head>
<body></body>
</html>
```
