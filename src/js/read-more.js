const brandsBtn = document.getElementById('show-all-btn-brands')
const typesBtn = document.getElementById('show-all-btn-types')
const aboutBtn = document.getElementById('read-more-btn-about')
const cardBradsList = document.querySelector('.cards-brands')
const cardTypesList = document.querySelector('.cards-types')
const aboutText = document.querySelector('.about__text-box')

brandsBtn.addEventListener('click', () => {
  brandsBtn.classList.toggle('read-more-btn--open')
  cardBradsList.classList.toggle('cards-brands--show-all')

  if (brandsBtn.innerText === 'Показать все') {
    brandsBtn.innerText = 'Скрыть'
  } else {
    brandsBtn.innerText = 'Показать все'
  }
})

typesBtn.addEventListener('click', () => {
  typesBtn.classList.toggle('read-more-btn--open')
  cardTypesList.classList.toggle('cards-types--show-all')

  if (typesBtn.innerText === 'Показать все') {
    typesBtn.innerText = 'Скрыть'
  } else {
    typesBtn.innerText = 'Показать все'
  }
})

aboutBtn.addEventListener('click', () => {
  aboutBtn.classList.toggle('read-more-btn--open')
  aboutText.classList.toggle('about__text-box--show')

  if (aboutBtn.innerText === 'Читать далее') {
    aboutBtn.innerText = 'Скрыть'
  } else {
    aboutBtn.innerText = 'Читать далее'
  }
})
