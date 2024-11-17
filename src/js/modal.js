const body = document.querySelector('body')
const modalMsg = document.querySelector('.modal-message')
const modalCall = document.querySelector('.modal-call')
const modalOverlay = document.querySelectorAll('.modal__overlay')
const btnCall = document.querySelectorAll('.profile__action-link-call')
const btnMsg = document.querySelectorAll('.profile__action-link-message')
const buttonsClose = document.querySelectorAll('.modal__icon-close')

buttonsClose.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalCall.classList.remove('modal--open')
    modalMsg.classList.remove('modal--open')
  })
})

modalOverlay.forEach((overlay) => {
  overlay.addEventListener('click', () => {
    modalCall.classList.remove('modal--open')
    modalMsg.classList.remove('modal--open')
  })
})

btnCall.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalCall.classList.add('modal--open')
  })
})

btnMsg.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalMsg.classList.add('modal--open')
  })
})
