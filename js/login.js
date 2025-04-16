document.addEventListener('DOMContentLoaded', function () {
  const backdrop = document.getElementById('dialog-backdrop')
  const signupModal = document.getElementById('signupModal')
  const loginModal = document.getElementById('loginModal')
  const userInfoModal = document.getElementById('modal-User')

  const openSignupBtn = document.querySelector('.register-link')
  const openLoginBtn = document.querySelector('.btn-submit')
  const switchToSignup = document.querySelector('.btn-switch-to-signup')

  const allCloseButtons = document.querySelectorAll('.btnCancel')

  function openModal(modal) {
    backdrop.style.display = 'block'
    modal.style.display = 'block'
  }

  function closeAllModals() {
    signupModal.style.display = 'none'
    loginModal.style.display = 'none'
    userInfoModal.style.display = 'none'
    backdrop.style.display = 'none'
  }

  openSignupBtn?.addEventListener('click', () => openModal(signupModal))
  openLoginBtn?.addEventListener('click', () => openModal(loginModal))
  switchToSignup?.addEventListener('click', () => {
    loginModal.style.display = 'none'
    openModal(signupModal)
  })

  backdrop.addEventListener('click', closeAllModals)

  allCloseButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      if (loginModal.style.display === 'block') {
        loginModal.style.display = 'none'
        openModal(userInfoModal)
      } else {
        closeAllModals()
      }
    })
  })

  const loginModalCloseBtn = loginModal.querySelector('.btnCancel')
  if (loginModalCloseBtn) {
    loginModalCloseBtn.addEventListener('click', function () {
      loginModal.style.display = 'none'
      openModal(userInfoModal)
    })
  }
})
