import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/scss/bootstrap.scss'
import 'animate.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import './assets/scss/style.scss'
import 'bootstrap'
import CoolLightBox from 'vue-cool-lightbox'
import VueScrollActive from 'vue-scrollactive'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueTypedJs from 'vue-typed-js'
import zh from './lang/zh'
import en from './lang/en'

let lang = sessionStorage.getItem('lang')
if (!lang) {
  sessionStorage.setItem('lang', 'en')
  lang = 'en'
}

const i18nPlugin = {
  install(Vue, locales) {
    //locales是传入的options
    //Vue.mixin({
    //  methods:{
    //     $t(id){
    //       return locales[this.$root.lang][id]
    //     }
    //   }
    // }) mixin混入

    Vue.prototype.$t = function (str) {
      //全局注册$t函数
      // return locales[this.$root.lang][str] //返回str对应的内容，this.$root.lang访问根组件的响应数据

      let data = locales[this.$root.lang]
      if (str.indexOf('.') == -1) {
        return data[str]
      } else {
        const arr = str.split('.')
        arr.map((item, index) => {
          data = data[item]
        })
        return data
      }
    }
  }
}

Vue.use(i18nPlugin, {
  en: en,
  zh: zh
})

Vue.config.productionTip = false
Vue.use(CoolLightBox)
Vue.use(VueScrollActive)
Vue.use(VueTypedJs)

new Vue({
  router,
  data() {
    return {
      lang: lang
    }
  },
  created() {
    AOS.init({
      duration: 800,
      once: true
    })
  },
  render: (h) => h(App)
}).$mount('#app')
