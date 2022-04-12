(function(){
    const burgerItem = document.querySelector('.header__top-burger');
    const menu = document.querySelector('.menu');
    const wrap =  document.querySelector('.wrapper');
    const menuCloseItem = document.querySelector('.menu__exit-icon');
    burgerItem.addEventListener('click', ()=> {
        menu.classList.add('menu__active');
        wrap.classList.add('wrapper__menu');
    });
    menuCloseItem.addEventListener('click', ()=> {
        menu.classList.remove('menu__active');
        wrap.classList.remove('wrapper__menu');
    });
}());
(function(){
    const search = document.querySelector('.header__top-btn');
    const inputSearch = document.querySelector('.header__top-input');
    const closeSearch = document.querySelector('.header__top-exit')
    search.addEventListener('click', ()=> {
        inputSearch.classList.add('header__top-input-active');
        closeSearch.classList.add('header__top-exit-active');
    });
    closeSearch.addEventListener('click', ()=> {
        inputSearch.classList.remove('header__top-input-active');
        closeSearch.classList.remove('header__top-exit-active');
    });
}())