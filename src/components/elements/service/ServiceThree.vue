<template>
  <div class="row row--15 service-wrapper">
    <div
      class="col-lg-4 col-md-6 col-sm-6 col-12"
      v-for="(service, index) in serviceList"
      :key=index
    >
      <div
        data-aos="fade-up"
        data-aos-delay="70"
      >
        <div :class="`service ${serviceStyle} ${checkTextAlign}`">
          <div class="inner">
            <div class="image">
              <img
                :src="service.image"
                alt="Service Images"
                class="service_img"
              />
            </div>
            <div class="content">
              <h4 class="title">
                <router-link to="/service-details">{{ service.title }}</router-link>
              </h4>
              <p class="description b1 color-gray mb--0">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceThree',
  props: {
    serviceStyle: {
      type: String
    },
    textAlign: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {
      serviceList: [
        {
          image: require('@/assets/images/logo/logo.png'),
          title: 'Endmatcher & Defect Saw',
          description: 'The Powermax Endmatcher is designed for head-end machining of floorboards, decking and cladding using the through-feed method.'
        },
        {
          image: require('@/assets/images/logo/logo.png'),
          title: 'Finger Jointer & Defect Saw',
          description: 'The Powermax Finger Joint Line is a unique finger jointing machine. This compact production line profiles horizontally, applies adhesive, cuts out defects, presses and cuts to length.'
        },
        {
          image: require('@/assets/images/logo/logo.png'),
          title: 'Chevron Machine Line',
          description: 'The Powermax Chevron is an advanced machine line for the production of Hungarian-point (Chevron) floor sections.'
        }
      ]
    }
  },
  computed: {
    checkTextAlign() {
      if (this.textAlign === 'left') return 'text-start';
      else if (this.textAlign === 'center') return 'text-center';
      else if (this.textAlign === 'end') return 'text-end';
      else return '';
    }
  }
}
</script>

<style scoped>
.service.service__style--2:hover {
  box-shadow: 0 0 39px #a7ebf0;
}

.service_img {
  border-radius: 50%;
}
</style>