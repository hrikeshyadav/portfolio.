let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top=> offset && top<offset + height ){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };

        let header = document.querySelector('header');

    });
}

ScrollReveal({
     reset: true,
     distance:'80px',
     duration:2000,
     delay: 200

});

// ScrollReveal().reveal('.home-econtent, .heading,',{origine:top});
ScrollReveal().reveal('.home-econtent', { origin: 'top' });
ScrollReveal().reveal('.heading', {origin: 'top' });

ScrollReveal().reveal('.home-img', {origin: 'bottom' });
ScrollReveal().reveal('.portfolio-box', {origin: 'bottom' });
ScrollReveal().reveal('.services-container', {origin: 'bottom' });
ScrollReveal().reveal('.contact', {origin: 'bottom' });
ScrollReveal().reveal('.home-econtent h1', {origin: 'left' });
ScrollReveal().reveal('.about-img', {origin: 'left' });
ScrollReveal().reveal('.about-content', {origin: 'right' });
ScrollReveal().reveal('.home-econtent p', {origin: 'right' });




var typed = new Typed('.multi-text', {
    strings: ['Full-Stack Web Developer', 'Software Tester',],
    typeSpeed: 50,
    backSpeed:100,
    backDelay:1000,
    loop : true
  });

