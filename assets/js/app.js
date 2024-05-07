/* toggle menu */
const toggle = document.getElementById("nav-toggle"),
    close = document.getElementById("nav-close"),
    nav = document.getElementById("nav-menu");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.add("nav__menu--show");
    });
}

if (close && nav) {
    close.addEventListener("click", () => {
        nav.classList.remove("nav__menu--show");
    });
}

/* home swiper */
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    breakpoints: {
        1220: {
            spaceBetween: -32
        }
    }
});

/* featured swiper */
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false
        }
    }
});

/* testimonial swiper */
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false
        }
    }
});

/* new swiper */
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        1150: {
            slidesPerView: 3
        }
    }
});

// scrollup
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)