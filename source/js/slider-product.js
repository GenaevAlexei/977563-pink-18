var productToggleOne = document.querySelector('.checks-slider__checkbox--one');
var productToggleTwo = document.querySelector('.checks-slider__checkbox--two');
var productToggleThree = document.querySelector('.checks-slider__checkbox--three');
var productsTable = document.querySelector('.product__list');

productToggleOne.addEventListener('click', function(){
  if(productsTable.classList.contains('product__list--three')){
  productsTable.classList.remove('product__list--three');
  productsTable.classList.add('product__list--one');
 }
  else{productsTable.classList.add('product__list--one')}
});

productToggleTwo.addEventListener('click', function(){
  if(productsTable.classList.contains('product__list--one')){
   productsTable.classList.remove('product__list--one');
  }
  else if(productsTable.classList.contains('product__list--three')){
   productsTable.classList.remove('product__list--three');
  }
});

productToggleThree.addEventListener('click', function(){
  if(productsTable.classList.contains('product__list--one')){
    productsTable.classList.remove('product__list--one');
    productsTable.classList.add('product__list--three');
  }
  else{productsTable.classList.add('product__list--three')
  }
});
