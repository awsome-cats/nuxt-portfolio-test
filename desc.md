# Nuxt.jsの機能メモやいろいろ

## vuetifyを加えたNuxt.jsの環境

- テーマが黒
- nuxt.config.js

```js

vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false, // trueは黒
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


buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify' 
  ],
```

## vue-typer

```js

// plugins/vueTyper.js

import Vue from 'vue'
import { VueTyper } from 'vue-typer'

Vue.component('vue-typer', VueTyper)

// nuxt.config.js
// この二つの設定でコンポーネントへインポートが不要になる
plugins: [
    {
      src: '~/plugins/vueTyper.js',
      ssr: false
    }
  ],

```

## parameterの検証

```js
// localhost:3000/blog/1へアクセス
// decimal(数字)を返せばtrue


<script>
  export default {
    validate({ params }) {
      return /^\d+$/.test(params.id)
    }
  }
</script>

```


