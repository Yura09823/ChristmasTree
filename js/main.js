import {db} from './db.js'
import {Cart} from "./modules/cart.js"

const savedDataFav = localStorage.getItem('user_fav');
const savedDataBuy = localStorage.getItem('user_buy');

let favourites = savedDataFav ? JSON.parse(savedDataFav) : {};
let cartItems = savedDataBuy ? JSON.parse(savedDataBuy) : {};

const myCard = new Cart(db); 


const updateTotalPrice = () => {
    const checkElement = document.querySelector('.modal__check');

    const idsInCart = Object.keys(cartItems);

    const total = idsInCart.reduce((sum, id) => {

        const product = db.find(item => item.id === id);

        return product ? sum + product.newPrice : sum;
    }, 0);

    checkElement.innerText = `${total} грн`;
};

myCard.state.cart = cartItems;
myCard.createCartBuy()
updateTotalPrice()

myCard.state.favorites = favourites;
myCard.createCartFav()



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






// modal start

const modalContainer = document.querySelector('.modal__container')

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
        
    }
})


// modal end

const city_select = document.getElementById('city-select');

city_select.addEventListener('change', (e)=>{
    document.title = `Santa Tree's | ${e.target.value}`
})

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

function initChart(){
    const ctx = document.getElementById('priceChart');

    new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: db.map(tree => `#${tree.id}`), 
            datasets: [{
                label: 'Ціна (грн)',
                data: db.map(tree => tree.newPrice),
                backgroundColor: '#D51544',   
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            indexAxis: 'y', 
            responsive: true,
            maintainAspectRatio: false, 
            plugins: {
                legend: { display: false }, 
                title: {
                    display: true,
                    text: 'Порівняння цін асортименту',
                    color: '#000',
                    font: { size: 24, family: 'Montserrat' }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: '#686870' }
                },
                y: {
                    ticks: { color: '#000', font: { weight: 'bold' } }
                }
            }
        }
    });
}

initChart();