const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {

        const rand = Math.random();

        setTimeout(() => {
            if (rand < 0.7) {
                resolve('ダミーデータです'); 
                return; // resolveの後にはreturnを忘れない、rejectを実行させないために、もしくはelseを使用してrejectを通さないようにする
            }
            reject('コネクションタイムアウト');
        }, 1000)
    });
}

fakeRequest('/hoge')
    .then((data) => { // then(コールバック関数)
        console.log(data); // resolveのパラメータがdataに入ってくる
    })
    .catch((message) => { // catch(コールバック関数)
        console.log(message); // rejectのダミーデータがmessageに入ってくる
    })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000) // Promiseオブジェクトが暗黙的にreturnされる、その中でthenオブジェクトを使って連結する
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .catch(console.log('エラー'))