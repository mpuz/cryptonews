import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017/local')
client.connect()
const db = client.db('local')
const articles = db.collection('articles')




const getNews = async (q) => {
    // console.log('db', q)
    let search = {}
    if (q.query.search?.length) {
        let searchRegex = new RegExp(q.query.search, 'i')
        search = {
            $or:
                [
                    {
                        parsed: searchRegex
                    },
                    {
                        link: searchRegex
                    },
                    {
                        title: searchRegex
                    },
                    {
                        author: searchRegex
                    },
                ]
        }
    }
    // REMOVE AFTER PROPER REQUEST DESIGN
    else {
        q.query.count = 15
    }


    let isSearch = Object.keys(search).length > 0 //REMOVE AFTER PROPER DESIGN
    // console.log(search)
    let news = await articles
        .find(search)
        .sort({ sortDate: -1, _id: 1 })
        .skip(isSearch ? 0 : parseInt(q.query.page) * parseInt(q.query.count) - parseInt(q.query.count))
        .limit(isSearch ? 1000 : parseInt(q.query.count))
        .project({ title: 1, link: 1, parsedImage: 1, pubDate: 1, creator: 1, enclosure: 1 })
        .toArray()
    return news
}

const getArticle = async (q) => {
    // console.log('get article', q)
    let article = await articles.findOne({ _id: ObjectId(q.query.id) })
    return article
}


module.exports = { getNews, getArticle }