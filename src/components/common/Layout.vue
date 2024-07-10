<template>
  <main class="page-wrapper">
    <Header :data="$props" />

    <div class="main-content">
      <slot></slot>
    </div>

    <Footer :data="$props" />
  </main>
</template>

<script>
import Header from './header/Header'
import Footer from './footer/Footer'

export default {
  name: 'Layout',
  components: { Header, Footer },
  props: {
    logo: {
      type: String
    },
    showTopHeader: {
      type: Boolean,
      default: true
    },
    topbarStyle: {
      type: Number,
      default: 1
    },
    showThemeSwitcherButton: {
      type: Boolean,
      default: true
    },
    headerTransparency: {
      type: Boolean,
      default: false
    },
    headerClass: {
      type: String
    },
    navAlignment: {
      type: String,
      default: 'right'
    },
    buyButtonClass: {
      type: String,
      default: 'btn-default btn-small round'
    },
    footerStyle: {
      type: Number,
      default: 1
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    showCopyright: {
      type: Boolean,
      default: true
    },
    showNewsletter: {
      type: Boolean,
      default: false
    },
    showCta: {
      type: Boolean,
      default: true
    }
  }
}
</script>