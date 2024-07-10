export default {
  data() {
    return {
      companyData: [
        {
          id: 1,
          sliderImage: 'product/courier100/slider.png',
          image: require(`@/assets/images/product/courier100/box.png`),
          detailImages: [
            require(`@/assets/images/product/courier100/1.png`),
            require(`@/assets/images/product/courier100/2.png`),
            require(`@/assets/images/product/courier100/3.png`),
            require(`@/assets/images/product/courier100/4.png`),
            require(`@/assets/images/product/courier100/5.png`),
            require(`@/assets/images/product/courier100/6.png`)
          ],
          title: 'Courier100',
          description: this.$t('products.Courier100.description'),
          category: 'AGV',
          introduction: this.$t('products.Courier100.introduction'),
          parameter: [
            {
              key: this.$t('parameter.dimension'),
              value: '704mm(L) * 470mm(W) * 397mm(H)'
            },
            {
              key: this.$t('parameter.weight'),
              value: '60KG'
            },
            {
              key: this.$t('parameter.interfaceScreen'),
              value: '7 inch'
            },
            {
              key: this.$t('parameter.speed'),
              value: '0.1~1.0m/s'
            },
            {
              key: this.$t('parameter.payload'),
              value: '100KG'
            },
            {
              key: this.$t('parameter.chargingTime'),
              value: '6 hours (From 0-100)'
            },
            {
              key: this.$t('parameter.accuracy'),
              value: '±10cm'
            },
            {
              key: this.$t('parameter.battery'),
              value: 'Lithium 38.4V/25Ah'
            },
            {
              key: this.$t('parameter.duration'),
              value: 'Full cargo 8 hours, empty cargo 25 hours'
            },
            {
              key: this.$t('parameter.chargingMode'),
              value: 'Automated / Manual'
            },
            {
              key: this.$t('parameter.motor'),
              value: '5.5 inch hub motor'
            },
            {
              key: this.$t('parameter.charger'),
              value: '43.2V DC 5A'
            }
          ],
          galleryData: [
            {
              id: 1,
              thumb: require(`@/assets/images/box/yongqiang1.png`),
              src: require(`@/assets/images/box/yongqiang1.png`),
              type: 'image'
            }
          ]
        },
        {
          id: 2,
          sliderImage: 'product/courier300/slider.png',
          image: require(`@/assets/images/product/courier300/box.png`),
          detailImages: [
            require(`@/assets/images/product/courier300/1.png`),
            require(`@/assets/images/product/courier300/2.png`),
            require(`@/assets/images/product/courier300/3.png`),
            require(`@/assets/images/product/courier300/4.png`),
            require(`@/assets/images/product/courier300/5.png`),
            require(`@/assets/images/product/courier300/6.png`),
            require(`@/assets/images/product/courier300/7.png`),
            require(`@/assets/images/product/courier300/8.png`)
          ],
          title: 'Courier300',
          description: this.$t('products.Courier300.description'),
          category: 'AGV',
          introduction: this.$t('products.Courier300.introduction'),
          parameter: [
            {
              key: this.$t('parameter.dimension'),
              value: '791.6mm(L) * 560mm(W) * 1104mm(H)'
            },
            {
              key: this.$t('parameter.weight'),
              value: '70KG'
            },
            {
              key: this.$t('parameter.interfaceScreen'),
              value: '7 inch'
            },
            {
              key: this.$t('parameter.speed'),
              value: '0.1~1.0m/s'
            },
            {
              key: this.$t('parameter.payload'),
              value: '300KG'
            },
            {
              key: this.$t('parameter.chargingTime'),
              value: '6 hours (From 0-100)'
            },
            {
              key: this.$t('parameter.accuracy'),
              value: '±10cm'
            },
            {
              key: this.$t('parameter.battery'),
              value: 'Lithium 38.4V/25Ah'
            },
            {
              key: this.$t('parameter.duration'),
              value: 'Full cargo 8 hours, empty cargo 20 hours'
            },
            {
              key: this.$t('parameter.chargingMode'),
              value: 'Automated / Manual'
            },
            {
              key: this.$t('parameter.motor'),
              value: '5.5 inch hub motor'
            },
            {
              key: this.$t('parameter.charger'),
              value: '43.2V DC 5A'
            }
          ],
          galleryData: [
            {
              id: 1,
              thumb: require(`@/assets/images/box/yongqiang1.png`),
              src: require(`@/assets/images/box/yongqiang1.png`),
              type: 'image'
            }
          ]
        }
      ],

      sliderData: [
        {
          id: 1,
          sliderImage: 'product/courier100/slider.png',
          image: require(`@/assets/images/product/courier100/box.png`),
          detailImages: [
            require(`@/assets/images/product/courier100/1.png`),
            require(`@/assets/images/product/courier100/2.png`),
            require(`@/assets/images/product/courier100/3.png`),
            require(`@/assets/images/product/courier100/4.png`),
            require(`@/assets/images/product/courier100/5.png`),
            require(`@/assets/images/product/courier100/6.png`)
          ],
          title: 'Courier100',
          description: this.$t('products.Courier100.description'),
          category: 'AGV',
          introduction: this.$t('products.Courier100.introduction'),
          parameter: [
            {
              key: this.$t('parameter.dimension'),
              value: '704mm(L) * 470mm(W) * 397mm(H)'
            },
            {
              key: this.$t('parameter.weight'),
              value: '60KG'
            },
            {
              key: this.$t('parameter.interfaceScreen'),
              value: '7 inch'
            },
            {
              key: this.$t('parameter.speed'),
              value: '0.1~1.0m/s'
            },
            {
              key: this.$t('parameter.payload'),
              value: '100KG'
            },
            {
              key: this.$t('parameter.chargingTime'),
              value: '6 hours (From 0-100)'
            },
            {
              key: this.$t('parameter.accuracy'),
              value: '±10cm'
            },
            {
              key: this.$t('parameter.battery'),
              value: 'Lithium 38.4V/25Ah'
            },
            {
              key: this.$t('parameter.duration'),
              value: 'Full cargo 8 hours, empty cargo 25 hours'
            },
            {
              key: this.$t('parameter.chargingMode'),
              value: 'Automated / Manual'
            },
            {
              key: this.$t('parameter.motor'),
              value: '5.5 inch hub motor'
            },
            {
              key: this.$t('parameter.charger'),
              value: '43.2V DC 5A'
            }
          ],
          galleryData: [
            {
              id: 1,
              thumb: require(`@/assets/images/box/yongqiang1.png`),
              src: require(`@/assets/images/box/yongqiang1.png`),
              type: 'image'
            }
          ]
        },
        {
          id: 2,
          sliderImage: 'product/courier300/slider.png',
          image: require(`@/assets/images/product/courier300/box.png`),
          detailImages: [
            require(`@/assets/images/product/courier300/1.png`),
            require(`@/assets/images/product/courier300/2.png`),
            require(`@/assets/images/product/courier300/3.png`),
            require(`@/assets/images/product/courier300/4.png`),
            require(`@/assets/images/product/courier300/5.png`),
            require(`@/assets/images/product/courier300/6.png`),
            require(`@/assets/images/product/courier300/7.png`),
            require(`@/assets/images/product/courier300/8.png`)
          ],
          title: 'Courier300',
          description: this.$t('products.Courier300.description'),
          category: 'AGV',
          introduction: this.$t('products.Courier300.introduction'),
          parameter: [
            {
              key: this.$t('parameter.dimension'),
              value: '791.6mm(L) * 560mm(W) * 1104mm(H)'
            },
            {
              key: this.$t('parameter.weight'),
              value: '70KG'
            },
            {
              key: this.$t('parameter.interfaceScreen'),
              value: '7 inch'
            },
            {
              key: this.$t('parameter.speed'),
              value: '0.1~1.0m/s'
            },
            {
              key: this.$t('parameter.payload'),
              value: '300KG'
            },
            {
              key: this.$t('parameter.chargingTime'),
              value: '6 hours (From 0-100)'
            },
            {
              key: this.$t('parameter.accuracy'),
              value: '±10cm'
            },
            {
              key: this.$t('parameter.battery'),
              value: 'Lithium 38.4V/25Ah'
            },
            {
              key: this.$t('parameter.duration'),
              value: 'Full cargo 8 hours, empty cargo 20 hours'
            },
            {
              key: this.$t('parameter.chargingMode'),
              value: 'Automated / Manual'
            },
            {
              key: this.$t('parameter.motor'),
              value: '5.5 inch hub motor'
            },
            {
              key: this.$t('parameter.charger'),
              value: '43.2V DC 5A'
            }
          ],
          galleryData: [
            {
              id: 1,
              thumb: require(`@/assets/images/box/yongqiang1.png`),
              src: require(`@/assets/images/box/yongqiang1.png`),
              type: 'image'
            }
          ]
        }
      ],

      galleryData: [
        {
          id: 1,
          thumb: require(`@/assets/images/product/courier100/box.png`),
          src: require(`@/assets/videos/1.mp4`),
          type: 'video',
          autoplay: true
        },
        {
          id: 2,
          thumb: require(`@/assets/images/product/courier300/box.png`),
          src: require(`@/assets/videos/2.mp4`),
          type: 'video',
          autoplay: true
        }
      ]
    }
  }
}
