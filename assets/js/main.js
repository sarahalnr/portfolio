// NAVIGATION BAR FUNCTION //
function myMenuFunction() {
  var menuBTN = document.getElementById("myNavMenu");

  if (menuBTN.className === "nav-menu") {
    menuBTN.className += " responsive";
  } else {
    menuBTN.className = "nav-menu";
  }
}

// ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING //
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgb(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

  }
}

// TYPING EFFECT //
var typingEffect = new Typed(".typedText", {
  strings : ["Designer", "Frontend Developer"],
  loop : true,
  typeSpeed : 100,
  backSpeed : 80,
  backDelay : 1000 
})

// ------------------------SCROLL REVEAL ANIMATION------------------- //
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  reset: true
})

// HOME //
// sr.reveal('.featured-text-card', {});
// sr.reveal('.featured-name', { delay: 100 });
// sr.reveal('.featured-text-info', { delay: 200 });
// sr.reveal('.featured-text-btn', { delay: 200 });
// sr.reveal('.social_icons', { delay: 200 });
// sr.reveal('.featured-image', { delay: 300 });

// PROJECT BOX //

// sr.reveal('.projects-box', { interval: 200 });

// //HEADINGS //
// sr.reveal('.top-header', {});

// SCROLL REVEAL LEFT_RIGHT ANIMATION//


// ABOUT INFO //
// const srleft = ScrollReveal({
//   origin: 'left',
//   distance: '80px',
//   duration: 2000,
//   reset: true
// })

// srleft.reveal('.about-info', { delay: 100 });
// srleft.reveal('.contact-info', { delay: 100 });


//ABOUT SKILS //

// CHANGE ACTIVE LINK //

section = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY;

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
  }
  window.addEventListener('scroll', scrollActive)