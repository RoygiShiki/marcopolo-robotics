<template>
  <Layout>
    <div class="rwt-portfolio-details rn-section-gap">
      <div class="container">
        <div class="row between_row">
          <div class="col-lg-10 offset-lg-1">
            <div class="inner">
              <div class="details-list mb">
                <div class="row mt--40 row--30">
                  <div class="col-lg-5">
                    <div class="content-left">
                      <h4 class="title">{{ portfolio.title }}</h4>
                      <div class="single-list-wrapper">
                        <div
                          class="single-list"
                          v-for="item in portfolio.parameter"
                          :key="item.id"
                        >
                          <label>{{ item.key }}:</label>
                          <span>{{ item.value }}</span>
                        </div>
                      </div>
                      <!-- <div class="view-btn mt--50">
                        <a
                          class="btn-default btn-large round"
                          :href="portfolio.site"
                          target="_blank"
                        >
                          Official Website
                        </a>
                      </div> -->
                    </div>
                  </div>
                  <div class="col-lg-5 offset-lg-2 mt_md--30 mt_sm--30">
                    <div class="content-right">
                      <div class="thumbnail">
                        <img
                          :src="portfolio.detailImages[0]"
                          alt="Corporate Image"
                          class="radius w-100 mb_30"
                        >
                      </div>
                      <!-- <h5 class="subtitle">introduction</h5>
                      <div
                        class="description"
                      >{{ portfolio.introduction }}</div> -->
                    </div>
                  </div>
                </div>
              </div>

              <!-- <Accordion
                id="accordionExampleOne"
                data-aos="fade-up"
                data-aos-delay="60"
              /> -->

              <!-- <div class="rwt-gallery-area rn-section-gap">
                <div class="container">
                  <Gallery :gallery-data="portfolio.galleryData"/>
                </div>
              </div> -->

              <div class="row">
                <div class="col-lg-8 offset-lg-2">
                  <div class="portfolio-gallery mt--40">
                    <div
                      class="gallery"
                      v-for="(item, index) in portfolio.detailImages"
                      :key="index"
                    >
                      <div class="thumbnail">
                        <img
                          class="w-100"
                          :src="item"
                          alt="Corporate Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../../components/common/Layout'
import PortfolioItemMixin from '../../mixins/PortfolioItemMixin'
import Gallery from '../../components/elements/gallery/Gallery'
import Accordion from '../../components/elements/accordion/Accordion'

export default {
  name: 'PortfolioDetailsPage',
  components: { Layout, Gallery, Accordion },
  mixins: [PortfolioItemMixin],
  data() {
    return {
      id: this.$route.params.id,
      portfolio: {}
    }
  },
  methods: {
    getPortfolio(portfolioId) {
      this.portfolio = this.companyData.find(item => item.id == portfolioId);
    }
  },
  created() {
    this.getPortfolio(this.id);
  },
  watch: {
    '$route'(to, from) {
      if (to.name == 'companyDetail') {
        this.getPortfolio(to.params.id);
      }
    }
  }
}
</script>

<style scoped>
.rwt-portfolio-details
  .content-left
  .single-list-wrapper
  .single-list
  + .single-list {
  border-top: 1px solid #eee;
}

.between_row {
  /* justify-content: space-between; */
  width: 100%;
}

.single-list label,
.single-list span {
  font-size: 14px !important;
}

.rwt-portfolio-details .content-left .single-list-wrapper .single-list {
  margin: 0;
  padding: 10px 5px;
}

.mb_30 {
  margin-bottom: 30px;
}

.mb {
  margin-bottom: 50px;
}
</style>