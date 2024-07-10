<template>
  <ul class="mainmenu">
    <li><router-link to="/">{{this.$t('nav.home')}}</router-link></li>

    <!-- <li><router-link to="/about">{{this.$t('nav.about')}}</router-link></li> -->
    <!-- <li><a class="language_switch">{{this.$t('nav.about')}}</a></li> -->

    <li class="has-droupdown has-menu-child-item">
      <a class="language_switch">
        {{this.$t('nav.products')}}
        <Icon
          name="plus"
          class="collapse-icon plus"
        />
        <Icon
          name="minus"
          class="collapse-icon minus"
        />
      </a>
      <ul class="submenu">
        <li><router-link to="/detail/1">Courier100</router-link></li>
        <li><router-link to="/detail/2">Courier300</router-link></li>
      </ul>
    </li>

    <!-- <li><router-link to="/about">{{this.$t('nav.certificate')}}</router-link></li> -->
    <!-- <li><a class="language_switch">{{this.$t('nav.certificate')}}</a></li> -->

    <li><router-link to="/contactUs">{{this.$t('nav.contact')}}</router-link></li>

    <!-- <li class="has-droupdown has-menu-child-item">
      <a class="language_switch">
        语言 / Language
        <Icon
          name="plus"
          class="collapse-icon plus"
        />
        <Icon
          name="minus"
          class="collapse-icon minus"
        />
      </a>
      <ul class="submenu">
        <li><a class="language_switch" @click="switchLanguage('zh')">中文</a></li>
        <li><a class="language_switch" @click="switchLanguage('en')">English</a></li>
      </ul>
    </li> -->
  </ul>
</template>

<script>
import Icon from "../../icon/Icon";
import Vue from 'vue'

export default {
  name: 'Nav',
  components: { Icon },
  data() {
    return {
      // lang: this.$root.locale
    }
  },
  methods: {
    switchLanguage(lang) {
      this.$root.lang = lang
      sessionStorage.setItem('lang', lang)
      window.location.reload()
    }
  }
}
</script>

<style scoped>
/* body.active-light-mode .mainmenu-nav .mainmenu > li > a {
  font-size: 16px;
  color: #fff;
  font-weight: bold;
}

body.active-light-mode .undefined .mainmenu-nav .mainmenu > li > a {
  color: #fff;
} */

/* .submenu {
  border-bottom: 2px solid #059dff;
  background-color: #efefef!important;
} */

/* body.active-light-mode .sticky .mainmenu > li > a {
  color: #fff;
}

body.active-light-mode .mainmenu > li > a:hover {
  color: #ccc !important;
}

body.active-light-mode .sticky.blue_header .mainmenu > li > a:hover {
  color: #ccc !important;
}

body.active-light-mode
  .header-transparent-with-topbar
  .mainmenu
  > li
  > a:hover {
  color: #059dff !important;
} */

.language_switch {
  cursor: pointer;
}

.mainmenu-nav .mainmenu > li > a {
  color: #fff;
  font-weight: bold;
}
</style>