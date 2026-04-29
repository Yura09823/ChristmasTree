const modal__basket = document.querySelector('.modal__basket')
const basket_open = document.getElementById('basket');
const basket_close = document.getElementById('basket_close');
const header = document.querySelector('.header__container');

const toggleModalBasket = ()=>{
    modal__basket.classList.toggle('toggle');

    if (modal__basket.classList.contains('toggle')) {
        document.body.style.overflowY = 'hidden';
        header.style.pointerEvents = 'none';
    } else {
        document.body.style.overflowY = 'auto';
        header.style.pointerEvents = 'all';
    }
}

basket_open.addEventListener('click', toggleModalBasket)
basket_close.addEventListener('click', toggleModalBasket)



const modal__favourites = document.getElementById('modal__favourites')
const fav__close = document.getElementById('fav__close')
const fav__open = document.getElementById('heart')

const toggleModalFav = ()=>{
    modal__favourites.classList.toggle('toggle');

    if (modal__favourites.classList.contains('toggle')) {
        document.body.style.overflowY = 'hidden';
        header.style.pointerEvents = 'none';
    } else {
        document.body.style.overflowY = 'auto';
        header.style.pointerEvents = 'all';
    }
}

fav__open.addEventListener('click', toggleModalFav)
fav__close.addEventListener('click', toggleModalFav)


const modal__search = document.getElementById('modal__search')
const search__close = document.getElementById('search__close')
const search__open = document.getElementById('search')

const toggleModalSearch = ()=>{
    modal__search.classList.toggle('toggle');

    if (modal__search.classList.contains('toggle')) {
        document.body.style.overflowY = 'hidden';
        header.style.pointerEvents = 'none';
    } else {
        document.body.style.overflowY = 'auto';
        header.style.pointerEvents = 'all';
    }
}

search__open.addEventListener('click', toggleModalSearch)
search__close.addEventListener('click', toggleModalSearch)