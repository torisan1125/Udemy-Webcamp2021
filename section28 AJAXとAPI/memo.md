### Ajaxと通信方法の確認

- ajax
  - Javascriptを使用してリクエストを送信する通信のこと

- chromeたぶのNetworkタブで確認できる
  - Netflixで使用してみると無限スクロールにリクエストが確認できる

### JSON

- AJAXって言ってるけどやり取りの形式にjsonは含まれる
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON>

- JSON→JSのオブジェクト
  - JSON.parse

- JSのオブジェクト→json
  - JSON.stringify
  - undefinedはnullに置き換えられる

### 通信するメソッドについて

- XHR
  - 古いAPI通信の仕方
  - Promiseが使用できない
  - 今はそれほど使用されていない
- fetch
  - returnはPromiseオブジェクト

- bitcoinの値段とかを取得するAPI
  - <https://api.cryptonator.com/api/ticker/btc-usd>
  - [参考URL](https://www.cryptonator.com/api/)

- axios、外部ライブラリを使用する
  - fetchよりも使用しやすい
  - [axiosのgithub](https://github.com/axios/axios)
  - `axios.get('https://api.cryptonator.com/api/ticker/btc-usd')`

- axiosとasync,awaitを使用して、可読性の高い非同期処理を記述することができる
