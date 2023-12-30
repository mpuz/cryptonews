import { join } from 'path'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  target: 'server', // default is 'server'


  env: {
    VER: require('./package.json').version,
    BASE_URL: 'https://beatcoin.io/' //process.env.BASE_URL
  },
  head: {
    title: 'Bitcoin And Crypto News RSS Reader',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Top news about Bitcoin, cryptocurrencies and tokens. Read from best news websites.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
      }
    ],

  },

  serverMiddleware: [
    //'crypto-js',
    {
      path: '/api/news', handler: '~/serverMiddleware/news'
    },
    {
      path: '/api/post', handler: '~/serverMiddleware/post'
    },

  ],
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/main.css'],



  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/color-mode'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    //'@nuxt/content',
    '@nuxtjs/dotenv',
  ],
  bootstrapVue: {
    icons: false
  },
  colorMode: {
    preference: 'dark', //default value of $colorMode.preference
    fallback: 'light', //fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // baseURL: process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:3000/' : 'https://beatcoin.io/',
    baseURL: (process.env.NODE_ENV === 'production' ? 'https://beatcoin.io' : 'http://localhost:3000'),

    //credentials: false
    //proxy: true,
    //https: true
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  // content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  }
}
