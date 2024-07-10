<template>
  <div :class="{'header-transparent-with-topbar': data.headerTransparency}">
    <!-- Start Header Area -->
    <header :class="[`rn-header header-default header-not-transparent header-sticky blue_header ${data.headerClass}`]">
      <div class="container position-relative">
        <div class="row align-items-center row--0">
          <template v-if="data.navAlignment === 'right'">
            <div class="col-lg-4 col-md-6 col-4">
              <Logo />
            </div>
            <div class="col-lg-8 col-md-6 col-8 position-static">
              <div class="header-right">
                <nav class="mainmenu-nav d-none d-lg-block">
                  <Nav />
                </nav>

                <div class="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div class="hamberger">
                    <button
                      class="hamberger-button"
                      @click.prevent="AppFunctions.toggleClass('.popup-mobile-menu', 'active')"
                    >
                      <Icon
                        name="menu"
                        size="21"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-if="data.navAlignment === 'left'">
            <div class="col-lg-9 col-md-6 col-10 position-static">
              <div class="header-left d-flex">
                <Logo />
                <!-- <nav class="mainmenu-nav d-none d-lg-block">
                    <Nav/>
                </nav> -->
              </div>
            </div>
            <!-- <div class="col-lg-3 col-md-6 col-2">
                <div class="header-right">
                    <div class="mobile-menu-bar ml--5 d-block d-lg-none">
                        <div class="hamberger">
                            <button class="hamberger-button"
                                    @click.prevent="AppFunctions.toggleClass('.popup-mobile-menu', 'active')">
                                <Icon name="menu" size="21"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div> -->
          </template>
        </div>
      </div>
    </header>
    <!-- End Header Area -->

    <!-- Start Mobile Menu -->
    <MobileMenu />
    <!-- End Mobile Menu -->

    <!-- Start Theme Style -->
    <!-- <div>
            <div class="rn-gradient-circle"/>
            <div class="rn-gradient-circle theme-pink"/>
        </div> -->
    <!-- End Theme Style -->
  </div>
</template>

<script>
import Icon from '../../icon/Icon'
import MobileMenu from './MobileMenu'
import AppFunctions from '../../../helpers/AppFunctions'
import Nav from './Nav'
import Logo from '../../elements/logo/Logo'

export default {
  name: 'Header',
  props: {
    data: {
      default: null
    }
  },
  components: { Logo, Nav, MobileMenu, Icon },
  data() {
    return {
      AppFunctions
    }
  },
  methods: {
    toggleStickyHeader() {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100) {
        AppFunctions.addClass('.header-default', 'sticky');
      } else if (scrolled <= 100) {
        AppFunctions.removeClass('.header-default', 'sticky');
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.toggleStickyHeader);
  },
  mounted() {
    this.toggleStickyHeader();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.toggleStickyHeader);
  }
}
</script>

<style lang="scss" scope>
.rn-gradient-circle {
  top: 0 !important;
}
</style>