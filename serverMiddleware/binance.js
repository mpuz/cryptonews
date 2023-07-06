
export default {
    path: '/rate',
    async handler(req, res, next) {
        var q = await url.parse(req.url, true);
        let response = await $axios.get('https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
            .catch(err => console.log(err))
        if (response) {
            console.log(response.data)
        }
        res.end(response.data)

        next()



    }
}