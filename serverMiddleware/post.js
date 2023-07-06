
const { getArticle } = require('./db')
import url from 'url';

export default {
    path: '/api/post',
    async handler(req, res, next) {
        var q = await url.parse(req.url, true);
        // console.log('loading article', q)
        let result = await getArticle(q)
        res.end(JSON.stringify(result))
        next()


    }

}