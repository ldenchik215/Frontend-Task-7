const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu__icon')
const menuOverlay = document.querySelector('.menu__overlay')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--open')
})

menuOverlay.addEventListener('click', () => {
  menu.classList.remove('menu--open')
})
