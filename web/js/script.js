
let fa_bars_staggered = document.querySelector(".fa-bars-staggered");
let hidden_menu = document.querySelector(".hidden-menu");
let hiddenmenuclosing = document.querySelector("#hiddenmenuclosing");

let innerlogincontainer = document.querySelector(".inner-login");
let closingloginform = document.querySelector(".closingloginform");
let logincontainer = document.querySelector(".login-container");

let innersignupcontainer = document.querySelector(".inner-signup");
let signupcontainer = document.querySelector(".signup-container");
let closingsignupform = document.querySelector(".closingsignupform");



const login = (e) => {
   e.preventDefault();
 signupcontainer.style.display="none";
  document.body.style.overflow = 'hidden';
  logincontainer.style.display="flex";
}
closingloginform.addEventListener("click", function () {
    logincontainer.style.display="none";
  document.body.style.overflow = '';
})




const signup = (e) => {
  e.preventDefault();
 signupcontainer.style.display="flex";
    logincontainer.style.display="none";
}
closingsignupform.addEventListener("click", function () {
 signupcontainer.style.display="none";
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

// icons show after scolling the screen
 window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const we1 = document.querySelector('.we1');
    const we2 = document.querySelector('.we2');

    // Adjust the value (like 100) as per your navbar height
    if (scrollY > 100) {
      we1.classList.add('visible-icon');
      we2.classList.add('visible-icon');
    } else {
      we1.classList.remove('visible-icon');
      we2.classList.remove('visible-icon');
    }
  });


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