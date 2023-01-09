var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
$("#select").change(()=>{
  let change = $("#select").val();
  document.title = `Santa's Trees! | ${change}`
});
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        $("#blur").fadeIn(500);
        $("#burger__popup").fadeIn(500);
        $('body').css("overflow", "hidden");
        $("#search__popup").fadeOut(500);
        $("#popup").fadeOut(500)
        $(".header__basket_hover").removeClass('header__basket_active');
        $(".header__search_hover").removeClass('header__search_active');
        $(".favourite__popup").fadeOut(500);
        $(".message__popup").fadeOut(500);
        $(".header__favourite_hover").removeClass('header__favourite_active');
        $(".header__bell_hover").removeClass('header__bell_active');
        
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        $("#blur").fadeOut(500);
        $("#burger__popup").fadeOut(500);
        $('body').css("overflow", "auto");
    }
});


let db = [{
  name:'Ялинка штучна',
  id:'0001',
  color: 'green',
  jewerly: true,
  img: 1,
  oldprice:4200,
  newprice:2200,
  price: 2200,
  amount:1
},
{
  name:'Ялинка штучна',
  id:'0002',
  color:'green',
  jewerly: false,
  img: 2,
  oldprice:5600,
  newprice:3300,
  price: 3300,
  amount:1
},
{
  name:'Ялинка штучна',
  id: '0003',
  color:'green',
  jewerly: true,
  img: 3,
  oldprice:3200,
  newprice:1800,
  price: 1800,
  amount:1
},
{
  name: 'Ялинка штучна',
  id: '0004',
  color: 'green',
  jewerly:true,
  img: 4,
  oldprice:4900,
  newprice:2900,
  price: 2900,
  amount:1
},
{
  name: 'Ялинка штучна',
  id:'0005',
  color:'green',
  jewerly:true,
  img:5,
  oldprice:5500,
  newprice:3500,
  price: 3500,
  amount:1
},
{
  name: 'Ялинка штучна',
  id:'0006',
  jewerly:false,
  color:'white',
  img:6,
  oldprice:6000,
  newprice:4900,
  price: 4900,
  amount:1
}
];

let arrayBasket = [];
class ShowTrees{
  showAll(){
    $(".main__catalog_wrap").empty();
    for(let el of db){
      $(".main__catalog_wrap").append(`
      <div class="main__catalog_item">
          <div class="main__photo">
              <img class="main__photo_fill" src="./img/${el.img}.png">
          </div>
          <div class="main__item_title">${el.name} #${el.id}</div>
          <div class="main__item_subtitle">Вага:<div class="main__item_color"> 1.8кг</div></div>
          <div class="main__item_subtitle">Ширина: <span class="main__item_color">60см</span></div>
          <div class="main__item_subtitle">Висота: <span class="main__item_color">2м</span></div>
          <div class="main__item_subtitle">${el.oldprice}грн</div>
          <div class="main__item_subtitle">${el.price}грн</div>
          <div class="main__buttons">
              <div class="main__item_favourite" id="${el.id}">До обраного</div>
              <div class="main__item_submit" id="${el.id}">Придбати</div>
          </div>
        </div>
      </div>
      `)
    };
    $(".main__item_submit").click((parametr)=>{
      ShowBasketCards(parametr);
    })
    $(".main__item_favourite").click((parametr)=>{
      showFavouritesCards(parametr);
    })
  }
  showGreen(){
    $(".main__catalog_wrap").empty();
    for(let i =0; i<db.length; i++){
      if(db[i].color == 'green'){
        $(".main__catalog_wrap").append(`
          <div class="main__catalog_item">
            <div class="main__photo">
                <img class="main__photo_fill" src="./img/${db[i].img}.png">
            </div>
            <div class="main__item_title">${db[i].name} ${db[i].id}</div>
            <div class="main__item_subtitle">Вага:<div class="main__item_color"> 1.8кг</div></div>
            <div class="main__item_subtitle">Ширина: <span class="main__item_color">60см</span></div>
            <div class="main__item_subtitle">Висота: <span class="main__item_color">2м</span></div>
            <div class="main__item_subtitle">${db[i].oldprice}грн</div>
            <div class="main__item_subtitle">${db[i].price}грн</div>
            <div class="main__buttons">
                <div class="main__item_favourite">До обраного</div>
                <div class="main__item_submit" id="${db[i].id}">Придбати</div>
            </div>
          </div>
        </div>
        `);
      }
    }
    $(".main__item_submit").click((parametr)=>{
      ShowBasketCards(parametr);
    })
  }
  showWhite(){
    $(".main__catalog_wrap").empty();
    for(let i =0; i<db.length; i++){
      if(db[i].color == 'white'){
        $(".main__catalog_wrap").append(`
          <div class="main__catalog_item">
            <div class="main__photo">
                <img class="main__photo_fill" src="./img/${db[i].img}.png">
            </div>
            <div class="main__item_title">${db[i].name} ${db[i].id}</div>
            <div class="main__item_subtitle">Вага:<div class="main__item_color"> 1.8кг</div></div>
            <div class="main__item_subtitle">Ширина: <span class="main__item_color">60см</span></div>
            <div class="main__item_subtitle">Висота: <span class="main__item_color">2м</span></div>
            <div class="main__item_subtitle">${db[i].oldprice}грн</div>
            <div class="main__item_subtitle">${db[i].price}грн</div>
            <div class="main__buttons">
                <div class="main__item_favourite">До обраного</div>
                <div class="main__item_submit" id="${db[i].id}">Придбати</div>
            </div>
          </div>
        </div>
        `);
      }
    }
    $(".main__item_submit").click((parametr)=>{
      ShowBasketCards(parametr);
    })
  }
  showWithJewerly(){
    $(".main__catalog_wrap").empty();
    for(let i =0; i<db.length; i++){
      if(db[i].jewerly == true){
        $(".main__catalog_wrap").append(`
          <div class="main__catalog_item">
            <div class="main__photo">
                <img class="main__photo_fill" src="./img/${db[i].img}.png">
            </div>
            <div class="main__item_title">${db[i].name} ${db[i].id}</div>
            <div class="main__item_subtitle">Вага:<div class="main__item_color"> 1.8кг</div></div>
            <div class="main__item_subtitle">Ширина: <span class="main__item_color">60см</span></div>
            <div class="main__item_subtitle">Висота: <span class="main__item_color">2м</span></div>
            <div class="main__item_subtitle">${db[i].oldprice}грн</div>
            <div class="main__item_subtitle">${db[i].price}рн</div>
            <div class="main__buttons">
                <div class="main__item_favourite">До обраного</div>
                <div class="main__item_submit" id="${db[i].id}">Придбати</div>
            </div>
          </div>
        </div>
        `);
      }
    }
    $(".main__item_submit").click((parametr)=>{
      ShowBasketCards(parametr);
    })
  }
  showWithOutJewerly(){
    $(".main__catalog_wrap").empty();
    for(let i =0; i<db.length; i++){
      if(db[i].jewerly == false){
        $(".main__catalog_wrap").append(`
          <div class="main__catalog_item">
            <div class="main__photo">
                <img class="main__photo_fill" src="./img/${db[i].img}.png">
            </div>
            <div class="main__item_title">${db[i].name} ${db[i].id}</div>
            <div class="main__item_subtitle">Вага:<div class="main__item_color"> 1.8кг</div></div>
            <div class="main__item_subtitle">Ширина: <span class="main__item_color">60см</span></div>
            <div class="main__item_subtitle">Висота: <span class="main__item_color">2м</span></div>
            <div class="main__item_subtitle">${db[i].oldprice}грн</div>
            <div class="main__item_subtitle">${db[i].price}грн</div>
            <div class="main__buttons">
                <div class="main__item_favourite">До обраного</div>
                <div class="main__item_submit" id="${db[i].id}">Придбати</div>
            </div>
          </div>
        </div>
        `);
      }
      $(".main__item_submit").click(()=>{
        ShowBasketCards(parametr);
      })
      
    }
  }
  showByPricePlus(){
    $(".main__catalog_wrap").empty();
    db.sort((a, b)=>{
      return a.price - b.price;
    })
    this.showAll();
    $(".main__item_submit").click((parametr)=>{
      ShowBasketCards(parametr);
    })
  }
  showByPriceMinus(){
    $(".main__catalog_wrap").empty();
    db.sort((a, b)=>{
      return b.price - a.price;
    })
    this.showAll();
    $(".main__item_submit").click((parametr)=>{
      ShowBasketCards(parametr);
    })
  }
};

$("#basket").click(()=>{
  $("#popup").fadeIn(500);
  $("#blur").fadeIn(500);
  $("#basket").addClass("header__basket_active");
  $('body').attr("scroll", "no");
  $('body').css("overflow", "hidden");
  $("#search__popup").fadeOut(500);
  $(".header__search_hover").removeClass('header__search_active');
  $(".favourite__popup").fadeOut(500);
  $(".header__favourite_hover").removeClass('header__favourite_active');
  $(".message__popup").fadeOut(500);
  $(".header__bell_hover").removeClass('header__bell_active');
  $("#burger__popup").fadeOut(500);
});
$("#close").click(()=>{
  $("#popup").fadeOut(500);
  $("#blur").fadeOut(500);
  $("#basket").removeClass("header__basket_active");
  $('body').css("overflow", "auto");
  menuBtn.classList.remove('open');
  menuOpen = false;
});

$("#search").click(()=>{
  $("#popup").fadeOut(500);
  $('body').css("overflow", "hidden");
  $("#search__popup").fadeIn(500);
  $("#blur").fadeIn(500);
  $(".header__search_hover").addClass('header__search_active')
  $("#basket").removeClass("header__basket_active");
  $(".favourite__popup").fadeOut(500);
  $(".header__favourite_hover").removeClass('header__favourite_active');
  menuBtn.classList.remove('open');
  menuOpen = false;
  $(".burger__popup").fadeOut(500);
  $(".message__popup").fadeOut(500);
  $(".header__bell_hover").removeClass('header__bell_active');
});


$("#search__close").click(()=>{
  $("#search__popup").fadeOut(500);
  $("#blur").fadeOut(500);
  $('body').css("overflow", "auto");
  $(".header__search_hover").removeClass('header__search_active');
});


$(".burger__popup_a").click(()=>{
  $("#blur").fadeOut(500);
  $("#burger__popup").fadeOut(500);
  $('body').css("overflow", "auto");
  menuBtn.classList.remove('open');
  menuOpen = false;
});

$(".burger__popup_basket").click(()=>{
  $("#burger__popup").fadeOut(500);
  $("#popup").fadeIn(500);
  $(".favourite__popup").fadeOut(500);
  $(".message__popup").fadeOut(500);
});
$(".burger__popup_messange").click(()=>{
  $("#burger__popup").fadeOut(500);
  $(".favourite__popup").fadeOut(500);
  menuBtn.classList.remove('open');
  menuOpen = false;

  $(".message__popup").fadeIn(500);
});
$(".main__filtr_fill").click(()=>{
  $(".filtr__popup").fadeIn(500);
  $('body').css("overflow", "hidden");
})

$("#filtr__close").click(()=>{
  $(".filtr__popup").fadeOut(500);
  $('body').css("overflow", "auto");
})

$(".header__favourite_hover").click(()=>{
  $(".favourite__popup").fadeIn(500);
  $(".header__favourite_hover").addClass('header__favourite_active');
  $('body').css("overflow", "hidden");
  $("#blur").fadeIn(500);
  $("#popup").fadeOut(500);
  $("#basket").removeClass("header__basket_active");
  $("#search__popup").fadeOut(500);
  $(".header__search_hover").removeClass('header__search_active');
  $(".header__bell_hover").removeClass('header__bell_active');
  menuBtn.classList.remove('open');
  menuOpen = false;
  $("#burger__popup").fadeOut(500);
  $(".message__popup").fadeOut(500);
})

$("#favourite__close").click(()=>{
  $(".favourite__popup").fadeOut(500);
  $(".header__favourite_hover").removeClass('header__favourite_active');
  $('body').css("overflow", "auto");
  menuBtn.classList.remove('open');
  menuOpen = false;
  $("#blur").fadeOut(500);
})


$(".burger__popup_favourite").click(()=>{
  $('body').css("overflow", "hidden");
  $(".favourite__popup").fadeIn(500);
  $("#burger__popup").fadeOut(500);
});

$(".header__bell_hover").click(()=>{
  $("#message__close").addClass('header__message_active');
  $('body').css("overflow", "hidden");
  $("#blur").fadeIn(500);
  $(".message__popup").fadeIn(500);
  $("#popup").fadeOut(500);
  $("#basket").removeClass("header__basket_active");
  $("#search__popup").fadeOut(500);
  $(".header__search_hover").removeClass('header__search_active');
  $(".header__favourite_hover").removeClass('header__favourite_active');
  $(".header__bell_hover").addClass('header__bell_active');
  menuBtn.classList.remove('open');
  menuOpen = false;
  $("#burger__popup").fadeOut(500);
});


$("#message__close").click(()=>{
  $(".message__popup").fadeOut(500);
  $('body').css("overflow", "auto");
  $("#blur").fadeOut(500);
  $(".favourite__popup").fadeOut(500);
  $(".header__bell_hover").removeClass('header__bell_active');
});

let input = '';
$(".popup__search_input").keydown(()=>{
  input = $(".popup__search_input").val();
  $(".search__popup_wrap").empty();
  for(let el of db){
    if(el.name == input){
      $(".search__popup_wrap").append(`
      <div class="search__card">
        <div class="search__card_left">
            <img src="./img/${el.img}.png" class="search__card_img">
            <div class="search__card_info">
                <div class="search__card_text">
                    <div class="search__card_name">${el.name}</div>
                    <div class="search__card_id">#${el.id}</div>
                </div>
                <div class="search__card_buttons">
                    <div class="search__card_button">До обраного</div>
                    <div class="search__card_button">Придбати</div>
                </div>
            </div>
        </div>
        <div class="search__card_right">
            <div class="search__card_right_top">
                <div class="search__card_logo"></div>
            </div>
            <div class="search__card_right_bottom">
                <div class="search__card_oldprice">${el.oldprice}грн</div>
                <div class="search__card_newprice">${el.price}грн</div>
            </div>
        </div>
    </div>
      `);
    }
  }
});


let allSummary;

function ShowBasketCards(parametr){
  $("#popupwrap").empty();
  for(let i =0; i<db.length; i++){
    if(parametr.currentTarget.id == db[i].id){
        if(arrayBasket.includes(parametr.currentTarget.id)){

        }
        else{
          arrayBasket.push(db[i].id);
        }
    }
  }
  allSummary = 0;
  for (let i = 0; i < db.length; i++) {
    for (let j = 0; j < arrayBasket.length; j++) {
      if (db[i].id == arrayBasket[j]) {
        
        allSummary += db[i].newprice;
        $("#popupwrap").append(`
        <div class="popup__card" id="code${db[i].id}">
            <div class="popup__card_close_fill">
                <div class="popup__card_close"></div>
            </div>
            <div class="popup__card_left">
                <img src="./img/${db[i].img}.png" class="popup__card_photo">
                <div class="popup__card_info">
                    <div class="popup__card_text">${db[i].name}</div>
                    <div class="popup__card_id">#${db[i].id}</div>
                </div>
            </div>
            <div class="popup__card_right">
                <div class="popup__card_price">${ db[i].newprice}грн</div>
                <div class="popup__card_addAmount">
                    <div class="popup__card_add popup__card_minus" id="clickMinus">-</div>
                    <div class="popup__card_amount">${db[i].amount}</div>
                    <div class="popup__card_add popup__card_plus" id="clickPlus">+</div>
                </div>
            </div>
        </div> 
        `);
        $("#code" + db[i].id + " .popup__card_plus").click(()=>{
          $("#code" + db[i].id + " .popup__card_amount").text(`${db[i].amount += 1}`)
          $("#code" + db[i].id + " .popup__card_price").text(`${db[i].newprice += db[i].price}грн`)
          allSummary+= db[i].price;
          $(".popup__footer_price").text(`${allSummary}грн`);
        });
        $("#code" + db[i].id + " .popup__card_minus").click(()=>{
          if(db[i].amount > 1){
            $("#code" + db[i].id + " .popup__card_amount").text(`${db[i].amount -= 1}`);
            $("#code" + db[i].id + " .popup__card_price").text(`${db[i].newprice -= db[i].price }грн`);
            allSummary-= db[i].price;
            $(".popup__footer_price").text(`${allSummary}грн`);
          }
          else{
            console.log('error')
          }
        }); 
        $("#code" + db[i].id + " .popup__card_close_fill").click(()=>{
          $("#code" + db[i].id).remove(0);
          for(let a =0; a < arrayBasket.length; a++){
            arrayBasket.splice(arrayBasket.indexOf(db[i].id), 1)
            break;
          }
          allSummary -= db[i].newprice;
          $(".popup__footer_price").text(`${allSummary}грн`);
          setTimeout(() => {
            if(arrayBasket.length === 0){
              $(".popup__footer_price").css('display', 'none');
              $(".popup__footer_submit").css('display', 'none');
              $(".popup__footer_input").css('display', "none");
            }
          }, 100);
        });
       }
        $(".popup__footer_price").css('display', 'flex');
        $(".popup__footer_submit").css('display', 'flex');
        $("#input").css('display', "flex");
        $(".popup__footer_price").text(`${allSummary}грн`);
        $(".popup__footer").fadeIn(0);
    } 
  }
}

let arrayFavorite = [];
function showFavouritesCards(parametr){
  $(".favourite__popup_wrap").empty();
  for(let i =0; i<db.length; i++){
    if(parametr.currentTarget.id == db[i].id){
        if(arrayFavorite.includes(parametr.currentTarget.id)){

        }
        else{
          arrayFavorite.push(db[i].id);
        }
    }
  };
  for (let i = 0; i < db.length; i++) {
    for (let j = 0; j < arrayFavorite.length; j++) {
      if(db[i].id === arrayFavorite[j]){
        $(".favourite__popup_wrap").append(`
        <div class="popup__card" id="id${db[i].id}">
            <div class="favourite__card_close_fill">
                <div class="popup__card_close"></div>
            </div>
            <div class="popup__card_left">
                <img src="./img/${db[i].img}.png" class="popup__card_photo">
                <div class="popup__card_info">
                    <div class="popup__card_text">${db[i].name}</div>
                    <div class="popup__card_id">#${db[i].id}</div>
                </div>
            </div>
            <div class="popup__card_right">
              <div class="popup__card_addAmount">
                <div class="popup__card_price">${ db[i].newprice}грн</div>
              </div>
            </div>
        </div>
        `);
        $("#id" + db[i].id + " .favourite__card_close_fill").click(()=>{
          $("#id" + db[i].id).remove(0);
          for(let a =0; a < arrayFavorite.length; a++){
            arrayFavorite.splice(arrayFavorite.indexOf(db[i].id), 1)
            break;
          }
          
        });
      }
    }
  }
}
$(".message__wrap_button").fadeOut(0);
function checkValidate(){
  if($("#input").val().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi) && $("#input").val().slice($("#input").val().indexOf('@'), $("#input").val().length).length === 10){
    // var params = { 
    //   email: $("#input").val(),
    //   message: `До сплати: ${allSummary}грн`
    // }
    // emailjs.send("service_yw1xiz5", "template_oo5smtm", params).then(function (res) {
    //   alert("Success!" + res.status);
    //   $(".message__popup_wrap").empty();
    //   $(".message__popup_wrap").append(`
    //     <h1 class="message__wrap_h1">Чек було відправлено на пошту успішно!</h1>
    //   `);
    //   $(".header__dot").show(500);
    // });
    $(".header__dot").fadeIn(500);
    $(".message__wrap_h1").remove(0)
    $(".message__popup_wrap").append(`
         <h1 class="message__wrap_h1">Чек було відправлено на пошту успішно!</h1>
    `);
    $(".message__wrap_button").fadeIn(500);
  }
}
$(".popup__footer_submit").click(()=>{
  checkValidate();
  $("#popupwrap").empty();
  $("#input").val(''); 
  allSummary = 0;
  $(".popup__footer_price").text(allSummary+'грн');
  $(".popup__footer").fadeOut(0);
})
$(".message__wrap_button").click(()=>{
  $(".message__wrap_button").fadeOut(0);
  $(".header__dot").fadeOut(0);
  $(".message__wrap_h1").remove();
})
//  TREES 
let showTrees = new ShowTrees();
showTrees.showAll();
$("#filtrAll").click(()=>{
  $(".filtr__popup").fadeOut(500);
  $('body').css("overflow", "auto");
  showTrees.showAll();
});

$("#filtrGreen").click(()=>{
  $(".filtr__popup").fadeOut(500);
  $('body').css("overflow", "auto");
  showTrees.showGreen();
});

$("#filtrWhite").click(()=>{
  $(".filtr__popup").fadeOut(500);
  $('body').css("overflow", "auto");
  showTrees.showWhite();
});

$("#filtrWithJewerly").click(()=>{
  $(".filtr__popup").fadeOut(500);
  $('body').css("overflow", "auto");

  showTrees.showWithJewerly();
});

$("#filtrWithOutJewerly").click(()=>{
  $(".filtr__popup").fadeOut(500);
  $('body').css("overflow", "auto");
  showTrees.showWithOutJewerly();
});

$("#filtrPlus").click(()=>{
  $(".filtr__popup").fadeOut(500);
  $('body').css("overflow", "auto");
  showTrees.showByPricePlus();
});

$("#filtrMinus").click(()=>{
  $(".filtr__popup").fadeOut(500);
  $('body').css("overflow", "auto");
  showTrees.showByPriceMinus();
});
$("#all").click(()=>{
  showTrees.showAll();
  $("#all").addClass('main__actived');

  $("#green").removeClass('main__actived');
  $("#white").removeClass('main__actived');
  $("#withJewerly").removeClass('main__actived');
  $("#withoutJewerly").removeClass('main__actived');
  $("#pricePlus").removeClass('main__actived');
  $("#priceMinus").removeClass('main__actived');
});
$("#green").click(()=>{
  showTrees.showGreen();
  $("#green").addClass('main__actived');

  $("#white").removeClass('main__actived');
  $("#all").removeClass('main__actived');
  $("#withJewerly").removeClass('main__actived');
  $("#withoutJewerly").removeClass('main__actived');
  $("#pricePlus").removeClass('main__actived');
  $("#priceMinus").removeClass('main__actived');
});

$("#white").click(()=>{
  showTrees.showWhite();
  $("#white").addClass('main__actived');

  $("#all").removeClass('main__actived');
  $("#green").removeClass('main__actived');
  $("#withJewerly").removeClass('main__actived');
  $("#withoutJewerly").removeClass('main__actived');
  $("#pricePlus").removeClass('main__actived');
  $("#priceMinus").removeClass('main__actived');
});

$("#withJewerly").click(()=>{
  showTrees.showWithJewerly();
  $("#withJewerly").addClass('main__actived');

  $("#white").removeClass('main__actived');
  $("#all").removeClass('main__actived');
  $("#green").removeClass('main__actived');
  $("#withoutJewerly").removeClass('main__actived');
  $("#pricePlus").removeClass('main__actived');
  $("#priceMinus").removeClass('main__actived');
});

$("#withoutJewerly").click(()=>{
  showTrees.showWithOutJewerly();
  $("#withoutJewerly").addClass('main__actived');

  $("#white").removeClass('main__actived');
  $("#all").removeClass('main__actived');
  $("#green").removeClass('main__actived');
  $("#withJewerly").removeClass('main__actived');
  $("#pricePlus").removeClass('main__actived');
  $("#priceMinus").removeClass('main__actived');
});

$("#pricePlus").click(()=>{
  showTrees.showByPricePlus()
  $("#pricePlus").addClass('main__actived');

  $("#all").removeClass('main__actived');
  $("#green").removeClass('main__actived');
  $("#white").removeClass('main__actived');
  $("#withJewerly").removeClass('main__actived');
  $("#withoutJewerly").removeClass('main__actived');
  $("#priceMinus").removeClass('main__actived');
});

$("#priceMinus").click(()=>{
  showTrees.showByPriceMinus();
  $("#priceMinus").addClass('main__actived');

  $("#all").removeClass('main__actived');
  $("#green").removeClass('main__actived');
  $("#white").removeClass('main__actived');
  $("#withJewerly").removeClass('main__actived');
  $("#withoutJewerly").removeClass('main__actived');
  $("#pricePlus").removeClass('main__actived');
});








