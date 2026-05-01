import {db} from '../db.js'
import {Cart} from "../modules/cart.js"

const savedDataFav = localStorage.getItem('user_fav');
const savedDataBuy = localStorage.getItem('user_buy');

let favourites = savedDataFav ? JSON.parse(savedDataFav) : {};
let cartItems = savedDataBuy ? JSON.parse(savedDataBuy) : {};



const myCard = new Cart(db);

myCard.state.favorites = favourites;
myCard.state.cart = cartItems;

myCard.CreateCart();

if(Object.keys(cartItems).length != 0){
    myCard.createCartBuy()

    Object.keys(cartItems).forEach(element => {
        
        const favBtn = document.querySelector(`.item__buy[data-id='${element}']`)

        favBtn.innerText = 'У кошику'
    });
    

}

if(Object.keys(favourites).length != 0){
    myCard.createCartFav()

    Object.keys(favourites).forEach(element => {
        
        const favBtn = document.querySelector(`.item__fav[data-id='${element}']`)

        favBtn.innerText = 'В обраному'
    });
}



const city_select = document.getElementById('city-select');

city_select.addEventListener('change', (e)=>{
    document.title = `Santa Tree's | ${e.target.value}`
})

// MODAL WINDOWS START

let search_input = document.getElementById('search_input')
let modal__search = document.querySelector('.modal__container-search')

const searchId = ()=>{
    let input_value = search_input.value.trim()
    
    const filtered = db.filter(tree =>{
        return tree.id.includes(input_value)
    })

    myCard.createCartSearch(filtered)
    
}

search_input.addEventListener('keyup', searchId)

const modalContainer = document.querySelector('.modal__container');

modalContainer.addEventListener('click', (e)=>{
    const closeBtn = e.target.closest('.modal__close-item');

    if(closeBtn){
        const card = closeBtn.closest('.modal__card');
        const id = card.dataset.id;

        delete cartItems[id];

        myCard.state.cart = cartItems;
        localStorage.setItem('user_buy', JSON.stringify(cartItems));


        myCard.createCartBuy();
        updateTotalPrice();
        
        const catalogBuyBtn = document.querySelector(`.item__buy[data-id="${id}"]`);

        if(catalogBuyBtn){
            catalogBuyBtn.innerText = 'Придбати';
        }
    }
})



const modalContainer_fav = document.querySelector('.modal__container-fav')

modalContainer_fav.addEventListener('click', (e)=>{
    const closeBtn = e.target.closest('.modal__close-item');

    if(closeBtn){
        const card = closeBtn.closest('.modal__card');
        const id = card.dataset.id;

        delete favourites[id];

        myCard.state.cart = favourites;

        localStorage.setItem('user_fav', JSON.stringify(favourites));



        myCard.createCartFav();
        
        const catalogFavBtn = document.querySelector(`.item__fav[data-id="${id}"]`);

        if(catalogFavBtn){
            catalogFavBtn.innerText = 'До обраного';
        }
    }
})

const updateTotalPrice = () => {
    const checkElement = document.querySelector('.modal__check');

    const idsInCart = Object.keys(cartItems);

    const total = idsInCart.reduce((sum, id) => {

        const product = db.find(item => item.id === id);

        return product ? sum + product.newPrice : sum;
    }, 0);

    checkElement.innerText = `${total} грн`;
};

// MODAL WINDOWS END

// CARD BUTTONS START
const catalog__container = document.getElementById("catalog__content");

catalog__container.addEventListener("click", (e) => {
    const target = e.target;

    const favBtn = target.closest(".item__fav");
    if (favBtn) {
        const id = favBtn.dataset.id;
        
        favourites[id] = true;

        favBtn.innerText = "В обраному";
        myCard.createCartFav();



        localStorage.setItem('user_fav', JSON.stringify(favourites));
        return; 
    }

    const buyBtn = target.closest(".item__buy");

    if (buyBtn) {
        const id = buyBtn.dataset.id;

        cartItems[id] = true; 
        
        buyBtn.innerText = "У кошику";
        myCard.createCartBuy();
        updateTotalPrice();


        localStorage.setItem('user_buy', JSON.stringify(cartItems));

    }
});
// CARD BUTTONS END

// FILTERS START

const filtersBtn = document.querySelectorAll(".filters__btn");
filtersBtn.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        const currentBtn = e.currentTarget;

        filtersBtn.forEach(other => other.classList.remove('filters__btn--active'));
        currentBtn.classList.add('filters__btn--active');

        myCard.state.color = currentBtn.dataset.filter;
        myCard.applyFilters();
    })
})

const jewelryBtns = document.querySelectorAll(".filters__btn--jewerly");
jewelryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const currentBtn = e.currentTarget;
        const status = currentBtn.dataset.filter;
        jewelryBtns.forEach(other => other.classList.remove('filters__btn--active'));
        currentBtn.classList.add('filters__btn--active');


        myCard.state.jewerly = (status === "all") ? "all" : (status === "true");
        myCard.applyFilters();
    });
});

const select = document.getElementById('price-sort');
select.addEventListener('change', (e) => {
    myCard.state.sort = e.target.value;
    myCard.applyFilters();
});

// FILTERS END


let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    loop:true,
    autoplay:{
        delay:6000
    }
});

updateTotalPrice();