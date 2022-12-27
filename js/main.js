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
  id:'c0001',
  color: 'green',
  jewerly: true,
  img: 1,
  oldprice:4200,
  newprice:2200
},
{
  name:'Ялинка штучна ',
  id:'c0002',
  color:'green',
  jewerly: false,
  img: 2,
  oldprice:5600,
  newprice:3300
},
{
  name:'Ялинка штучна ',
  id: 'c003',
  color:'green',
  jewerly: true,
  img: 3,
  oldprice:3200,
  newprice:1800
},
{
  name: 'Ялинка штучна',
  id: 'c0004',
  color: 'green',
  jewerly:true,
  img: 4,
  oldprice:4900,
  newprice:2900
},
{
  name: 'Ялинка штучна',
  id:'c0005',
  color:'green',
  jewerly:true,
  img:5,
  oldprice:5500,
  newprice:3500
},
{
  name: 'Ялинка штучна ',
  id:'c0006',
  jewerly:false,
  color:'white',
  img:6,
  oldprice:6000,
  newprice:3900
}
]
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
    }
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
});
$("#green").click(()=>{
  showTrees.showGreen();
  $("#green").addClass('main__actived');

  $("#white").removeClass('main__actived');
  $("#all").removeClass('main__actived');
  $("#withJewerly").removeClass('main__actived');
  $("#withoutJewerly").removeClass('main__actived');
});

$("#white").click(()=>{
  showTrees.showWhite();
  $("#white").addClass('main__actived');

  $("#all").removeClass('main__actived');
  $("#green").removeClass('main__actived');
  $("#withJewerly").removeClass('main__actived');
  $("#withoutJewerly").removeClass('main__actived');
});

$("#withJewerly").click(()=>{
  showTrees.showWithJewerly();
  $("#withJewerly").addClass('main__actived');

  $("#white").removeClass('main__actived');
  $("#all").removeClass('main__actived');
  $("#green").removeClass('main__actived');
  $("#withoutJewerly").removeClass('main__actived');
});

$("#withoutJewerly").click(()=>{
  showTrees.showWithOutJewerly();
  $("#withoutJewerly").addClass('main__actived');

  $("#white").removeClass('main__actived');
  $("#all").removeClass('main__actived');
  $("#green").removeClass('main__actived');
  $("#withJewerly").removeClass('main__actived');
});
