const fetchBitcoinPrice = async() => {
    try {
        const config = {
            headers: {
                'Access-Control-Allow-Origin' : '*' 
            }
        }
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd', config); // headerやcontent-typeも別途指定することができる
        console.log(res);
    } catch (e) {
        console.log('問題が起きました', e);
    }
}

fetchBitcoinPrice();