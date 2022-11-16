let burgerBtnOpen = document.querySelector('.header__burger');
let burgerBtnClose = document.querySelector('.burger-menu__cross');
let burgerMenu = document.querySelector('.burger-menu');
let burgerLoginBtn = document.querySelector('.burger-login');

const toggleMenu = function() {
  burgerMenu.classList.toggle('burger-hide')
};

const hidePopup = function () {
  loginPopupWrapper.classList.add('popup-bg-hidden')
  loginPopup.classList.add('popup-hidden')
  signupPopup.classList.add('popup-hidden')
};

const showPopup = function () {
  loginPopupWrapper.classList.remove('popup-bg-hidden')
  loginPopup.classList.remove('popup-hidden')
}

burgerBtnOpen.addEventListener('click', () => {
  toggleMenu()
});

burgerBtnClose.addEventListener('click', () => {
  toggleMenu()
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('header__burger') && !burgerMenu.classList.contains('burger-hide') && !e.target.closest('.burger-menu')) {
    burgerMenu.classList.add('burger-hide')
  }
});

burgerLoginBtn.addEventListener('click', (e) => {
  showPopup()
  toggleMenu()
});


let loginBtn = document.querySelector('.login-button');
let loginPopupWrapper = document.querySelector('.popup__wrapper');
let loginPopup = document.querySelector('.login');
let signupPopup = document.querySelector('.signup')
let popupAccountLink = document.querySelectorAll('.login__account-link');

loginBtn.addEventListener('click', (e) => {
  showPopup()
});

loginPopupWrapper.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup__wrapper')) {
    hidePopup()
  }
});

document.addEventListener('keydown', (e) => {
  if (!loginPopupWrapper.classList.contains('popup-bg-hidden') && e.key == 'Escape') {
    hidePopup()
  }
});

popupAccountLink.forEach(element => {
  element.addEventListener('click', (e) => {
    loginPopup.classList.toggle('popup-hidden')
    signupPopup.classList.toggle('popup-hidden')    
  })
});