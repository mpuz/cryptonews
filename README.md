# cryptonews

You need MongoDB running at localhost:27017

Also the port 3000 of nodejs app need to be proxied by nginx to server root

Here is background process running on cron to fetch news from sources, writing them to database. 
https://github.com/mpuz/cryptonews-backend

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
