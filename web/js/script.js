// let downarrow= document.getElementsByClassName(".fa-angle-down");
let hiddentop= document.querySelector(".hiddentop");
let hiddentop_closing=document.querySelector("#hiddentop-closing")
let fa_bars_staggered=document.querySelector(".fa-bars-staggered")
let hidden_menu=document.querySelector(".hidden-menu")
let hiddenmenuclosing=document.querySelector("#hiddenmenuclosing");
// let filterbtn= document.querySelector("#filterbtn")
let filtermenu=document.querySelector(".filtermenu")


function showMenu() {
 hiddentop.style.top="0"; 
//  console.log("hi");
}
function filterMenu(){
  filtermenu.style.display="block";
}
hiddentop_closing.addEventListener("click",function(){
     hiddentop.style.top="-950px";
})

fa_bars_staggered.addEventListener("click",function(){
hidden_menu.style.right="0"
})
hiddenmenuclosing.addEventListener("click",function(){
     hidden_menu.style.right="-350px";
})

// filterbtn.addEventListener("click",function(){
//   filtermenu.style.right="0";
// })
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
