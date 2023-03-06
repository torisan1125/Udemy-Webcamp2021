const fs = require('fs');
const dirName = process.argv[2] || 'Project'

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
fs.mkdirSync(dirName) // appleフォルダを作成する
fs.writeFileSync(`${dirName}/index.html`, '') // ファイルを作成する
fs.writeFileSync(`${dirName}/app.js`,'')
fs.writeFileSync(`${dirName}/styles.css`,'')

