<template>
  <div class="logo">
    <!-- <router-link :to="url"> -->
    <!-- <img class="logo-light" :src="lightLogo" alt="Corporate Logo"/> -->
    <!-- <img class="logo-dark" :src="logo" alt="Corporate Logo"/> -->
    <img class="logo-light nav_logo" :src="logo" alt="Corporate Logo" @click="goHomePage"/>
    <span
      class="logo-text"
      @click="goHomePage"
    >{{this.$t('company')}}</span>
    <!-- </router-link> -->
  </div>
</template>

<script>
// import logo from '@/assets/images/logo/logo.png'

export default {
  name: 'Logo',
  props: {
    url: {
      type: String,
      default: '/'
    },
    logo: {
      type: String,
      default: function () {
        return require(`@/assets/images/logo/logo.png`)
      }
    }
  },
  methods: {
    goHomePage() {
      this.$router.push({ path: '/' }, () => { })
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 22px;
  margin-left: 12px;
  margin-right: 20px;
  font-weight: bold;
  cursor: pointer;
}

.nav_logo {
  width: 60px;
  height: 60px;
  cursor: pointer;
}
</style>