export function bodyScrollToggle() {
  const body = document.querySelector('body')
  const menu = document.querySelector('.menu')
  const modalMsg = document.querySelector('.modal-message')
  const modalCall = document.querySelector('.modal-call')

  let isOpenMenu = menu.classList.contains('menu--open')
  let isOpenModalMsg = modalMsg.classList.contains('modal--open')
  let isOpenModalCall = modalCall.classList.contains('modal--open')

  if ((isOpenMenu && isOpenModalMsg) || (isOpenMenu && isOpenModalCall)) return
  if (isOpenMenu || isOpenModalMsg || isOpenModalCall) {
    body.classList.add('no-scroll')
  } else {
    body.classList.remove('no-scroll')
  }
}
