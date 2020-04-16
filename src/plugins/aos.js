import Vue from 'vue'

import AOS from 'aos'
import 'aos/dist/aos.css'
// ↓eslintの設定を一部無視
/* eslint new-cap: 0 */

export default ({ app }) => {
  app.AOS = new AOS.init({ duration: 800 })
}

Vue.mixin({
  watch: {
    '$route.path' () {
      setTimeout(() => {
        AOS.refresh()
      }, 500)
    }
  }
})
