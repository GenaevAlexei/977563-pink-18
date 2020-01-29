var popupButtonClose = document.querySelector('.button--popup-accept');
var popupAccept = document.querySelector('.popup--form-accept');
var popupButtonOk = document.querySelector('.button--popup-error');
var popupError = document.querySelector('.popup--form-error');

popupButtonClose.addEventListener('click', function(){
  popupAccept.classList.add('popup--hidden');
});

popupButtonOk.addEventListener('click', function(){
  popupError.classList.add('popup--hidden');
})
