/* ================================================= */
/* =============== TOGGLE ICON NAVBAR ============== */
/* ================================================= */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {

    menuIcon.classList.toggle('bx-x');

    navbar.classList.toggle('active');

};



/* ================================================= */
/* =========== SCROLL SECTIONS ACTIVE LINK ========= */
/* ================================================= */

let sections = document.querySelectorAll('section');

let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {


    sections.forEach(sec => {

        let top = window.scrollY;

        let offset = sec.offsetTop - 150;

        let height = sec.offsetHeight;

        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {


            navlinks.forEach(link => {

                link.classList.remove('active');

            });


            let activeLink = document.querySelector(
                `header nav a[href*="${id}"]`
            );


            if (activeLink) {

                activeLink.classList.add('active');

            }

        }

    });



    /* ================================================= */
    /* ================= STICKY NAVBAR ================= */
    /* ================================================= */

    let header = document.querySelector('header');


    header.classList.toggle(
        'sticky',
        window.scrollY > 100
    );



    /* ================================================= */
    /* ===== REMOVE MOBILE MENU AFTER SCROLL =========== */
    /* ================================================= */

    menuIcon.classList.remove('bx-x');

    navbar.classList.remove('active');

};



/* ================================================= */
/* ================= SCROLL REVEAL ================== */
/* ================================================= */

ScrollReveal({

    distance: '80px',

    duration: 2000,

    delay: 200

});


ScrollReveal().reveal(
    '.home-content, .heading',
    {
        origin: 'top'
    }
);


ScrollReveal().reveal(
    '.home-img, .services-container, .portfolio-box, .internship-box',
    {
        origin: 'bottom'
    }
);


ScrollReveal().reveal(
    '.home-content h1, .about-img',
    {
        origin: 'left'
    }
);


ScrollReveal().reveal(
    '.home-content p, .about-content',
    {
        origin: 'right'
    }
);



/* ================================================= */
/* ==================== TYPED JS =================== */
/* ================================================= */

const types = new Typed(
    '.multiple-text',
    {

        strings: [
            'Software Developer'
        ],

        typeSpeed: 100,

        backSpeed: 100,

        backDelay: 1000,

        loop: true

    }
);
