import colors from 'vuetify/es5/util/colors'

// eslint-disable-next-line nuxt/no-cjs-in-config
const webpack = require('webpack')

// path
const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
const baseDir = process.env.BASE_DIR || '/'
// http://localhost:3000/の意味
const basePath = baseUrl + baseDir

// meta
const lang = 'ja'
const siteName = '株式会社ミューコス'
const siteDesc = '共通のディスクリプション'
const siteKeywords = '1つ目,２つ目,３つ目,４つ目'

// images
// /img/icons
const iconImages = baseDir + 'img/icons/'
// /img/ogp
const ogpImages = basePath + 'img/ogp/'

// pwa
const shortName = 'ミューコス'
// const splashscreens = baseDir + 'img/splashscreens'

// manifestIcon
const manifestIcon = 'img/icons/icon-1024.png'

export default {
  mode: 'universal',
  srcDir: 'src/',
  router: {
    base: baseDir, // 忘れない
  },
  manifest: {
    lang,
    name: siteName,
    short_name: shortName,
    description: siteDesc,
    background_color: '#ffffff',
    thema_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait'
  },
  icon: {
    iconfileName: manifestIcon
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: `%s - ${siteName}`,
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang
    },
    meta: [
      // 設定関連
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no, email=no, address=no' },
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      // OGP関連
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: basePath },
      { hid: 'og:description', property: 'og:description', content: siteDesc },
      { hid: 'og:image', property: 'og:image', content: `${ogpImages}home.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-16.ico' },
      // IE11対応で本来icoファイルではなくpngを使う
      // 32, 48, 62,180(apple-touch-icon.png),1024と同じように用意
      { rel: 'icon', sizes: '16p×16', type: 'image/ico', href: iconImages + 'favicon.ico' },
      // fontがあれば
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&amp;subset=japanese' }
    ]
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://cdn.materialdesignicons.com/.*',
        handler: 'cacheFirst'
      },
      {
        urlPattern: baseDir + '.*',
        handler: 'staleWhileRevalidate',
        strategyOptions: {
          cacheName: 'my-cache',
          cacheExpiration: {
            maxAgeSeconds: 24 * 60 * 60 * 30
          }
        }
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/vueTyper.js',
      ssr: false
    },
    {
      src: '~/plugins/aos.js', ssr: false
    },
    '~/plugins/vue-scrollto.js',
    '~/plugins/vue-rellax.js',

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
    // ['@nuxtjs/google-analytics', { id: 'UA-XXXXXX-X' }],
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/google-tag-manager
    // ['@nuxtjs/google-tag-manager', { id: 'GTM-XXXXXXX' }],
    // Doc: https://github.com/nuxt-community/sitemap-module
    // '@nuxtjs/sitemap'
  ],
  styleResources: {
    scss: [
      '~assets/variables.scss',
      '~~root-variables.scss'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
