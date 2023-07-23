// 로드 후 실행
window.addEventListener('DOMContentLoaded', () => {
    
})

// 사이즈 변경 되면 실행
window.addEventListener('resize', () => {

})

// 스크롤 하면 실행
window.addEventListener('scroll', () => {
    if (window && window.scrollY > 100) {
        scrollHeader();
        scrollTop();
    }
})

let pagination = document.querySelectorAll('.pms-title .title-box');
let nowActiveIdx;
//article1 슬라이드
const article1Swiper = new Swiper('.pmsSwiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".pmsSwiper-container .swiper-button-next",
        prevEl: ".pmsSwiper-container .swiper-button-prev",
    },
        pagination: {
        el: ".pmsSwiper-container .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            spaceBetween: 20,
            slidesPerView: 1.5,
        },
        1024: {
            spaceBetween: 30,
            slidesPerView: 1.5,
        },
        1366: {
            spaceBetween: 30,
            slidesPerView: 1.5,
        },
        1636: {
            spaceBetween: 30,
            slidesPerView: 2.5,
        }
    },
    on: {
        slideChange: function () {
            nowActiveIdx = this.realIndex;
            pagination.forEach(el => {
                el.classList.remove('title-active');
            });

            if (nowActiveIdx === 0 || nowActiveIdx === 4)pagination[0].classList.add('title-active');
            if (nowActiveIdx === 1 || nowActiveIdx === 5)pagination[1].classList.add('title-active');
            if (nowActiveIdx === 2 || nowActiveIdx === 6)pagination[2].classList.add('title-active');
            if (nowActiveIdx === 3 || nowActiveIdx === 7)pagination[3].classList.add('title-active');
        }
    }
})

document.getElementById('pms-next').addEventListener('click', () => {
    document.getElementById('swiper-button-next').click();
})
document.getElementById('pms-prev').addEventListener('click', () => {
    document.getElementById('swiper-button-prev').click();
})

let bullet = document.querySelectorAll('#swiper-pagination span');
for (let i = 0; i < pagination.length; i++) {
    pagination[i].addEventListener('click', function () {
        bullet.forEach((el, idx) => {
            if (el.classList.contains('swiper-pagination-bullet-active')) {
                if (i === 0 && idx !== 0 && idx !== 4) idx < 4 ? bullet[4].click() : bullet[0].click();
                if (i === 1 && idx !== 1 && idx !== 5) {
                    if (idx < 5 && idx > 1) bullet[5].click();
                    else bullet[1].click();
                }
                if (i === 2 && idx !== 2 && idx !== 6) {
                    if (idx < 6 && idx > 2) bullet[6].click();
                    else bullet[2].click();
                }
                if (i === 3 && idx !== 3 && idx !== 7) {
                    if (idx < 7 && idx > 3) bullet[7].click();
                    else bullet[3].click();
                }
            }
        })
    })
}

const q = document.querySelectorAll('.accordionQ');
const a = document.querySelectorAll('.accordionA');
q.forEach(el => {
    el.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.nextElementSibling.style.maxHeight = null;
            this.classList.remove('active');
        } else {
                    a.forEach(el => {
            el.style.maxHeight = null;
            el.previousElementSibling.classList.remove('active');
        })
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
        this.classList.add('active');
        }
    })
})
