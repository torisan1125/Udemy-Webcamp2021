- nodejsの処理には同期処理と非同期処理がある
  - 同期処理はその処理が終わるまで次の処理にはいかない
  - 〜syncのような処理の名前になっている
  - try~catchを使用する
  - 非同期処理はそのまま処理の実行を待たずに使用する

- nodejsのモジュールシステム
  - CJS→commonJS、デフォルト
  - ESM→以下のような書き方

```js
import React from 'react'
// ...
export default App
```

- <https://de-milestones.com/what-is-cjs-umd-esm/>

- fsmodule
  - ファイルシステムのモジュール
  - <https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_mkdirsync_path_options>

```js
const fs = require('fs');
const dirName = process.argv[2] || 'Project'

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
fs.mkdirSync(dirName) // appleフォルダを作成する
fs.writeFileSync(`${dirName}/index.html`, '') // ファイルを作成する
fs.writeFileSync(`${dirName}/app.js`,'')
fs.writeFileSync(`${dirName}/styles.css`,'')
```
