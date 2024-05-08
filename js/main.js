
(() => {

  let menuElem = document.querySelector('.js__header_top__center__menu__item');
  let menuHidden = document.querySelector('.js__header_top__center__menu__item__hidden');


  if (menuElem) {
    menuElem.addEventListener('click', function () {
      menuHidden.classList.toggle('active');
      this.classList.toggle('active');
    })


    document.addEventListener('click', (e) => {
      const menuElemEl = e.composedPath().includes(menuElem);
      const gamb = e.composedPath().includes(menuHidden);
      if (!menuElemEl && !gamb) {
        menuHidden.classList.remove('active');
        menuElem.classList.remove('active');
      }

    })
  }

})();

(() => {

  let menuElem = document.querySelector('.js__header_top__center__menu__item_too');
  let menuHidden = document.querySelector('.js__header_top__center__menu__item__hidden_too');


  if (menuElem) {
    menuElem.addEventListener('click', function () {
      menuHidden.classList.toggle('active');
      this.classList.toggle('active');
    })


    document.addEventListener('click', (e) => {
      const menuElemEl = e.composedPath().includes(menuElem);
      const gamb = e.composedPath().includes(menuHidden);
      if (!menuElemEl && !gamb) {
        menuHidden.classList.remove('active');
        menuElem.classList.remove('active');
      }

    })
  }

})();