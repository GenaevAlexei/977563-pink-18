var navToggle = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');
var headerLogo = document.querySelector('.page-header__logo-wrapper');
var offerSlogan = document.querySelector('.offer__slogan');

navToggle.classList.remove('page-header__toggle--nojs');
mainNav.classList.remove('main-nav--nojs');
headerLogo.classList.remove('page-header__logo-wrapper--nojs');
offerSlogan.classList.remove('offer__slogan--nojs');

navToggle.addEventListener('click', function(){
  if(mainNav.classList.contains('main-nav--closed')){
    mainNav.classList.remove('main-nav--closed');
    headerLogo.classList.remove('page-header__logo-wrapper--closed');
    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle--opened');
  }
  else{
    mainNav.classList.add('main-nav--closed');
    headerLogo.classList.add('page-header__logo-wrapper--closed');
    navToggle.classList.add('page-header__toggle--closed');
    navToggle.classList.remove('page-header__toggle--opened');
  }
})
