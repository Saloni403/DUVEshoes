
let fa_bars_staggered = document.querySelector(".fa-bars-staggered");
let hidden_menu = document.querySelector(".hidden-menu");
let hiddenmenuclosing = document.querySelector("#hiddenmenuclosing");

let logincontainer = document.querySelector(".login-container");
let closingloginform = document.querySelector(".closingloginform");

let signupcontainer = document.querySelector(".signup-container");
let closingsignupform = document.querySelector(".closingsignupform");

const login = (e) => {
   e.preventDefault();
  logincontainer.style.left = "50%";
  document.body.style.overflow = 'hidden';
   hidden_menu.style.right = "-350px";
    signupcontainer.style.left = "-50%";
}
closingloginform.addEventListener("click", function () {
  logincontainer.style.left = "-50%";
  document.body.style.overflow = '';
})


const signup = (e) => {
  e.preventDefault();
  signupcontainer.style.zIndex = "99"; 
  signupcontainer.style.left = "50%";
   logincontainer.style.left = "-50%";
}
closingsignupform.addEventListener("click", function () {
  signupcontainer.style.left = "-50%";
  document.body.style.overflow = '';
})

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('header');
  if (window.scrollY > 10) {
    navbar.classList.add('blurred');
  } else {
    navbar.classList.remove('blurred');
  }
});

document.getElementById("scrollToTop").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

fa_bars_staggered.addEventListener("click", function () {
  hidden_menu.style.right = "0"
})
hiddenmenuclosing.addEventListener("click", function () {
  hidden_menu.style.right = "-350px";
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


 const radios = [
    document.getElementById("slide1"),
    document.getElementById("slide2"),
    document.getElementById("slide3"),
    document.getElementById("slide4"),
    document.getElementById("slide5"),
  ];

  let current = 0;

  setInterval(() => {
    radios[current].checked = false;
    current = (current + 1) % radios.length;
    radios[current].checked = true;
  }, 2000); // Change slide every 2 seconds