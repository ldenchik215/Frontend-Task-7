import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

let brandsSlider = null
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
    brandsSlider = new Swiper('.swiper', {
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
}
