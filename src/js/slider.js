import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

let brandsSlider = null
let typeSlider = null
let priceSlider = null
const mediaQuerySize = 768

if (document.body.clientWidth < mediaQuerySize) {
  sliderInit()
}

window.addEventListener('resize', () => {
  if (document.body.clientWidth < mediaQuerySize) {
    sliderInit()
  } else {
    sliderDestroy()
  }
})

function sliderInit() {
  if (!brandsSlider) {
    brandsSlider = new Swiper('.cards-brands', {
      modules: [Pagination],
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }

  if (!typeSlider) {
    typeSlider = new Swiper('.cards-types', {
      modules: [Pagination],
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }

  if (!priceSlider) {
    priceSlider = new Swiper('.cards-price', {
      modules: [Pagination],
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}

function sliderDestroy() {
  if (brandsSlider) {
    brandsSlider.destroy()
    brandsSlider = null
  }

  if (typeSlider) {
    typeSlider.destroy()
    typeSlider = null
  }

  if (priceSlider) {
    priceSlider.destroy()
    priceSlider = null
  }
}
