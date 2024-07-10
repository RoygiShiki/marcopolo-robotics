<template>
  <Layout
    header-class="header-left-align"
    nav-alignment="right"
    :header-transparency="true"
    :show-top-header="false"
    buy-button-class="btn-default btn-small"
  >
    <!-- Start Slider Area -->
    <div
      class="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow"
    >
      <VueSlickCarousel
        v-bind="sliderSetting"
        :autoplay="true"
        :pauseOnHover="false"
        :autoplaySpeed="5000"
      >
        <div
          v-for="(slider, index) in sliderData"
          :key="index"
          class="single-slide"
        >
          <div
            class="height-950 bg-overlay bg_image"
            :style="{
              'background-image': `url(${require(`@/assets/images/${slider.sliderImage}`)})`
            }"
          >
            <div class="container">
              <div class="row row--30 align-items-center">
                <div class="order-2 order-lg-1 col-lg-7">
                  <div class="inner text-start">
                    <h1 class="title">{{ slider.title }}</h1>
                    <p class="description">{{ slider.description }}</p>
                    <div class="button-group mt--30">
                      <!-- <a class="btn-default"
                        :href="slider.site"
                        target="_blank">
                        Official Website
                      </a> -->
                      <a class="btn-default" @click.stop="goToDetail(slider.id)"
                        >more detail</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <!-- End Slider Area -->

    <!-- <div class="rn-service-area rn-section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <SectionTitle
              text-align="center"
              subtitle="What we can do for you"
              title="Some Main Title Here"
              data-aos="fade-up"
            />
          </div>
        </div>
        <ServiceThree
          service-style="service__style--2"
          text-align="center"
        />
      </div>
    </div> -->

    <div class="rwt-elements-area rn-section-gap">
      <div class="container">
        <Testimonial :testimonial="testimonialData4" :testimonial-style="4" />
      </div>
    </div>

    <!-- <div class="rwt-advance-tab-area rn-section-gap">
      <div class="container">
        <AdvancedTab :tab-data="tabData2" :tab-style="2"/>
      </div>
    </div> -->

    <div class="rwt-gallery-area rn-section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <SectionTitle
              text-align="center"
              subtitle="What we can do for you"
              title="Videos"
              data-aos="fade-up"
            />
          </div>
        </div>
        <Gallery :gallery-data="galleryData" />
      </div>
    </div>

    <div class="rwt-portfolio-area rn-section-gap">
      <div class="container">
        <Portfolio
          class="mt--20"
          :portfolio-data="companyData"
          column="col-lg-4 col-md-6 mt--30 box-grid-layout"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../../components/common/Layout'
import VueSlickCarousel from 'vue-slick-carousel'
import PortfolioItemMixin from '../../mixins/PortfolioItemMixin'
import Portfolio from '../../components/common/portfolio/Portfolio'
import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
import ServiceOne from '../../components/elements/service/ServiceOne'
import ServiceThree from '../../components/elements/service/ServiceThree'
import Testimonial from '../../components/elements/testimonial/Testimonial'
import AdvancedTab from '../../components/elements/tab/AdvancedTab'
import Gallery from '../../components/elements/gallery/Gallery'

export default {
  name: 'DigitalAgency',
  components: {
    Layout,
    VueSlickCarousel,
    Portfolio,
    SectionTitle,
    ServiceOne,
    ServiceThree,
    Testimonial,
    AdvancedTab,
    Gallery
  },
  mixins: [PortfolioItemMixin],
  data() {
    return {
      sliderSetting: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
      testimonialData4: {
        id: '01',
        form: 'Marcopolo Robotics engaged autonomous delivery robot development. It adheres to the concept of "putting AI into action".  ',
        description: 'About Marcopolo Robotics',
        name: '',
        subtitle: '',
        image: 'testimonial-dark-01'
      }
      // tabData2: {
      //   tabContent: [
      //     {
      //       id: 1,
      //       menu: 'market-research-2',
      //       title: 'Endmatcher & Defect Saw',
      //       description: 'The Powermax Endmatcher is designed for head-end machining of floorboards, decking and cladding using the through-feed method.',
      //       image: require(`@/assets/images/box/example.png`),
      //     },
      //     {
      //       id: 2,
      //       menu: 'corporate-report-2',
      //       title: 'Finger Jointer & Defect Saw',
      //       description: 'The Powermax Finger Joint Line is a unique finger jointing machine. This compact production line profiles horizontally, applies adhesive, cuts out defects, presses and cuts to length.',
      //       image: require(`@/assets/images/box/example.png`),
      //     },
      //   ]
      // },
    }
  },
  created() {
    // if (condition) {
    // }
  },
  methods: {
    goToDetail(id) {
      this.$router.push('/detail/' + id)
    },

    goToWebsite(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.height-650 {
  height: 650px;

  .title {
    margin-top: 60px;
  }
}

.btn-default {
  cursor: pointer;
}

.slider-style-4 .inner {
  padding-top: 0;
}
</style>
