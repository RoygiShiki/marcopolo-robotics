<template>
  <Layout>
    <!-- Start Contact Area  -->
    <div class="rwt-contact-area rn-section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mb--40">
            <SectionTitle
              text-align="center"
              subtitle="Contact Form"
              title="Our Contact Address Here"
            />
          </div>
        </div>
        <div class="row row--15">
          <div class="col-lg-12">
            <div class="rn-contact-address mt_dec--30">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="rn-address">
                    <div class="icon">
                      <Icon
                        name="headphones"
                        :size="40"
                      />
                    </div>
                    <div class="inner">
                      <h4 class="title">Contact Phone Number</h4>
                      <p><a>+86-13527025349</a></p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12">
                  <div class="rn-address">
                    <div class="icon">
                      <Icon
                        name="mail"
                        :size="40"
                      />
                    </div>
                    <div class="inner">
                      <h4 class="title">Our Email Address</h4>
                      <p><a href="mailto:marcopolo-robotics@outlook.com">marcopolo-robotics@outlook.com</a></p>
                      <p><br /></p>
                      <p><br /></p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12">
                  <div class="rn-address">
                    <div class="icon">
                      <Icon
                        name="map-pin"
                        :size="40"
                      />
                    </div>
                    <div class="inner">
                      <h4 class="title">Our Location</h4>
                      <p>Nimble City in Zhaoqing, Guangdong Province, China <br /> </p>
                      <p><br /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt--40 row--15">
          <div class="col-lg-7">
            <ContactForm />
          </div>
          <div class="col-lg-5 mt_md--30 mt_sm--30">
            <!-- <GoogleMap/> -->
            <div
              ref="mapBoxRef"
              id="map_box"
            >
              <!-- <img src="@/assets/location.png" class="location_img" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Contact Area  -->
  </Layout>
</template>

<script>
import Layout from '../../components/common/Layout'
import Breadcrumb from '../../components/elements/breadcrumb/Breadcrumb'
import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
import Icon from "../../components/icon/Icon";
import GoogleMap from "../../components/elements/contact/GoogleMap";
import ContactForm from "../../components/elements/contact/ContactForm";

export default {
  name: 'ContactPage',
  components: { ContactForm, GoogleMap, Icon, SectionTitle, Breadcrumb, Layout },
  data() {
    return {

    }
  },
  created() {
    // let script = document.createElement('script')
    // script.type = 'text/javascript'
    // script.src =
    //   'https://map.qq.com/api/js?v=1.exp&key=XMNBZ-S2GRL-TGNP3-E57GG-N36ME-MRBFO'
    // document.body.appendChild(script)
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init() {
      var myLatlng = new window.TMap.LatLng(23.071658, 112.503201);
      var myOptions = {
        zoom: 17,
        center: myLatlng,
      }
      var map = new window.TMap.Map(document.getElementById("map_box"), myOptions);
      map.removeControl(window.TMap.constants.DEFAULT_CONTROL_ID.SCALE)
      new window.TMap.MultiMarker({
        map: map,
        geometries: [
          {
            id: '1',
            position: new window.TMap.LatLng(23.071658, 112.503201),
          }
        ]
      })
    }
  }
}
</script>

<style scope>
#map_box {
  height: 550px;
  border-radius: 10px;
  overflow: hidden;
}
</style>