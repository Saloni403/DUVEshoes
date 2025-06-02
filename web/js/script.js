
let fa_bars_staggered=document.querySelector(".fa-bars-staggered")
let hidden_menu=document.querySelector(".hidden-menu")
let hiddenmenuclosing=document.querySelector("#hiddenmenuclosing");



window.addEventListener('scroll', () => {
  const navbar = document.querySelector('header');
  if (window.scrollY > 10) {
    navbar.classList.add('blurred');
  } else {
    navbar.classList.remove('blurred');
  }
});


fa_bars_staggered.addEventListener("click",function(){
hidden_menu.style.right="0"
})
hiddenmenuclosing.addEventListener("click",function(){
     hidden_menu.style.right="-350px";
})


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
