
const { getNews } = require('./db')
import url from 'url';

export default {
    path: '/api/news',
    async handler(req, res, next) {
        // console.log('loading news')
        var q = await url.parse(req.url, true);
        // console.log('middleware', q)
        let result = await getNews(q)
        res.end(JSON.stringify(result))

        next()

    }

}