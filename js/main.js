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
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// const menuBtnBurger = document.querySelector('.menu-btn__burger');


let db = [{
  name:'Ялинка штучна ',
  id:'#0001',
  color: 'green',
  jewerly: true,
  img: 1,
  oldprice:4200,
  newprice:2200
},
{
  name:'Ялинка штучна ',
  id:'#0002',
  color:'green',
  jewerly: false,
  img: 2,
  oldprice:5600,
  newprice:3300
},
{
  name:'Ялинка штучна ',
  id: '#0003',
  color:'green',
  jewerly: true,
  img: 3,
  oldprice:3200,
  newprice:1800
},
{
  name: 'Ялинка штучна',
  id: '#0004',
  color: 'green',
  jewerly:true,
  img: 4,
  oldprice:4900,
  newprice:2900
},
{
  name: 'Ялинка штучна',
  id:'#0005',
  color:'green',
  jewerly:true,
  img:5,
  oldprice:5500,
  newprice:3500
},
{
  name: 'Ялинка штучна ',
  id:'#0006',
  jewerly:false,
  color:'white',
  img:6,
  oldprice:6000,
  newprice:3900
}
];
let clickAll = 0;
class ShowTrees{
  showAll(){
    $(".main__catalog_wrap").empty();
    for(let el of db){
      $(".main__catalog_wrap").append(`
      <div class="main__catalog_item">
          <div class="main__photo">
              <img class="main__photo_fill" src="./img/${el.img}.png">
          </div>
          <div class="main__item_title">${el.name} ${el.id}</div>
          <div class="main__item_subtitle">Вага:<div class="main__item_color"> 1.8кг</div></div>
          <div class="main__item_subtitle">Ширина: <span class="main__item_color">60см</span></div>
          <div class="main__item_subtitle">Висота: <span class="main__item_color">2м</span></div>
          <div class="main__item_subtitle">${el.oldprice}грн</div>
          <div class="main__item_subtitle">${el.newprice}грн</div>
          <div class="main__buttons">
              <div class="main__item_favourite">До обраного</div>
              <div class="main__item_submit" id="${el.id}">Придбати</div>
          </div>
        </div>
      </div>
      `)
    };
    $(".main__item_submit").click((parametr)=>{
        console.log(parametr.currentTarget.id)
        clickAll++;
        for(let el of db){
          if(parametr.currentTarget.id == el.id){
            if(clickAll <= 1){
              $("#popupwrap").append(`
              <div class="popup__card">
                  <div class="popup__card_close_fill">
                      <div class="popup__card_close"></div>
                  </div>
                  <div class="popup__card_left">
                      <img src="./img/${el.img}.png" class="popup__card_photo">
                      <div class="popup__card_info">
                          <div class="popup__card_text">${el.name}</div>
                          <div class="popup__card_id">${el.id}</div>
                      </div>
                  </div>
                  <div class="popup__card_right">
                      <div class="popup__card_price">${el.newprice}грн</div>
                      <div class="popup__card_addAmount">
                          <div class="popup__card_add">-</div>
                          <div class="popup__card_amount" id="amountClick">${clickAll}</div>
                          <div class="popup__card_add" id="clickPlus">+</div>
                      </div>
                  </div>
              </div> 
              `)
            }
            else{
              if(parametr.currentTarget.id == el.id){
                $(".popup__card").addClass('popup__active');
              }
              $("#popupwrap").append(`
              <div class="popup__card">
                  <div class="popup__card_close_fill">
                      <div class="popup__card_close"></div>
                  </div>
                  <div class="popup__card_left">
                      <img src="./img/${el.img}.png" class="popup__card_photo">
                      <div class="popup__card_info">
                          <div class="popup__card_text">${el.name}</div>
                          <div class="popup__card_id">${el.id}</div>
                      </div>
                  </div>
                  <div class="popup__card_right">
                      <div class="popup__card_price">${el.newprice}</div>
                      <div class="popup__card_addAmount">
                          <div class="popup__card_add">-</div>
                          <div class="popup__card_amount" id="amountClick">${clickAll}</div>
                          <div class="popup__card_add" id="clickPlus">+</div>
                      </div>
                  </div>
              </div> 
              `)
            }
          }
        }
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
            <div class="main__item_subtitle">${db[i].newprice}грн</div>
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
      console.log(parametr.currentTarget.id)
      clickGreen++;
      
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
            <div class="main__item_subtitle">${db[i].newprice}грн</div>
            <div class="main__buttons">
                <div class="main__item_favourite">До обраного</div>
                <div class="main__item_submit" id="${db[i].id}">Придбати</div>
            </div>
          </div>
        </div>
        `);
      }
    }
    $(".main__item_submit").click(()=>{
      alert('s')
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
            <div class="main__item_subtitle">${db[i].newprice}рн</div>
            <div class="main__buttons">
                <div class="main__item_favourite">До обраного</div>
                <div class="main__item_submit" id="${db[i].id}">Придбати</div>
            </div>
          </div>
        </div>
        `);
      }
    }
    $(".main__item_submit").click(()=>{
      alert('s')
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
            <div class="main__item_subtitle">${db[i].newprice}грн</div>
            <div class="main__buttons">
                <div class="main__item_favourite">До обраного</div>
                <div class="main__item_submit" id="${db[i].id}">Придбати</div>
            </div>
          </div>
        </div>
        `);
      }
      $(".main__item_submit").click(()=>{
        alert('s')
      })
    }
  }
  showByPricePlus(){
    $(".main__catalog_wrap").empty();
    db.sort((a, b)=>{
      return a.newprice - b.newprice;
    })
    this.showAll()
  }
  showByPriceMinus(){
    $(".main__catalog_wrap").empty();
    db.sort((a, b)=>{
      return b.newprice - a.newprice;
    })
    this.showAll()
  }
};

$("#basket").click(()=>{
  $("#popup").fadeIn(500);
  $("#blur").fadeIn(500);
  $("#basket").addClass("header__basket_active");
  $('body').attr("scroll", "no");
  $('body').css("overflow", "hidden")
});
$("#close").click(()=>{
  $("#popup").fadeOut(500);
  $("#blur").fadeOut(500);
  $("#basket").removeClass("header__basket_active");
  $('body').css("overflow", "auto")
});

$("#search").click(()=>{
  $("#popup").fadeOut(500);
  $('body').css("overflow", "hidden");
  $("#search__popup").fadeIn(500);
  $("#blur").fadeIn(500);
});



















//  TREES 
let showTrees = new ShowTrees();
showTrees.showAll();
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