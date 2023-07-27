// 로드 후 실행
window.addEventListener("DOMContentLoaded", () => {
  partnershipList();
  responsiveSwiper();
  responsiveBullet();

  if (window.scrollY > 100) {
    document.getElementById("header").classList.remove("header-active");
  } else {
    document.getElementById("header").classList.add("header-active");
  }
});

// 사이즈 변경 되면 실행
window.addEventListener("resize", () => {
  // responsiveSwiper();
  // responsiveBullet();
});

// 스크롤 하면 실행
window.addEventListener("scroll", () => {
  if (window && window.scrollY > 100) {
    document.getElementById("header").classList.remove("header-active");
    scrollHeader();
    scrollTop();
  } else {
    document.getElementById("header").classList.add("header-active");
  }

  // 메리트 카운트 시작
  // const hexList = document.querySelectorAll(".hex");
  // if (count) {
  //   hexList.forEach((el, idx) => {
  //     if (el.classList.contains("aos-animate")) {
  //       const countList = document.querySelectorAll(".merit-count h1 span");
  //       countList[idx] &&
  //         counter(
  //           countList[idx],
  //           countList[idx].getAttribute("data-count"),
  //           idx,
  //           countList[idx].getAttribute("data-time")
  //         );
  //     }
  //   });
  // }
  // 메리트 카운트 시작
  const numList = document.querySelectorAll(".knowhow-num");
  if (count) {
    numList.forEach((el, idx) => {
      if (el.classList.contains("aos-animate")) {
        const countList = document.querySelectorAll("h2 span");
        countList[idx] &&
          counter(
            countList[idx],
            countList[idx].getAttribute("data-count"),
            idx,
            countList[idx].getAttribute("data-time")
          );
      }
    });
  }
});

//메인 슬라이드
const keyword = ["BIGDATA", "AI", "DEEP LEARNING", "SMART SAFETY"];
let mainSwiper = new Swiper(".mainSwiper-container", {
  pagination: {
    el: ".mainSwiper-container .swiper-pagination",
    clickable: true,
    disableOnInteraction: false,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '"><small class="hide768">' +
        keyword[index] +
        "</small></span>"
      );
    },
  },
  loop: true,
  speed: 600,
  paginationClickable: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

const responsiveSwiper = () => {
  if (iWIdth > 1023) {
    mainSwiper.destroy();
    mainSwiper = new Swiper(".mainSwiper-container", {
      pagination: {
        el: ".mainSwiper-container .swiper-pagination",
        clickable: true,
        disableOnInteraction: false,
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            '"><small class="hide768">' +
            keyword[index] +
            "</small></span>"
          );
        },
      },
      direction: "vertical",
      effect: "slide",
      parallax: true,
      loop: true,
      speed: 600,
      paginationClickable: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  } else {
    mainSwiper.destroy();
    mainSwiper = new Swiper(".mainSwiper-container", {
      pagination: {
        el: ".mainSwiper-container .swiper-pagination",
        clickable: true,
        disableOnInteraction: false,
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            '"><small class="hide768">' +
            keyword[index] +
            "</small></span>"
          );
        },
      },
      loop: true,
      speed: 600,
      paginationClickable: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  }
};

// 메인페이지 불렛 사이즈 % 조정
const responsiveBullet = () => {
  document
    .querySelectorAll(".mainSwiper-container .swiper-pagination-bullet")
    .forEach((el) => {
      el.style.width = `${100 / keyword.length - 1}%`;
    });
};

// 메리트 숫자 카운팅
let count = true;
const counter = (el, data, idx, time) => {
  // console.log(idx);
  let num = 0;
  let counting = setInterval(function () {
    if (num == data) {
      clearInterval(counting);
      return false;
    }
    if (data < 100) {
      num += 1;
    } else if (data > 100 && data < 500) {
      num += 2;
    } else {
      num += 30;
    }
    el.innerHTML = new Intl.NumberFormat().format(num);
  }, time);
  idx === 2 ? (count = false) : null;
};

//제품 슬라이드
const swiper = new Swiper(".productSwiper-container", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 12,
  rewind: true,
  //   pagination-dynamic-bullets: true,
  //   dynamicBullets: true,
  //   loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, swiperBtn) {
      const list = ["BigData", "Deep Learning", "Ai", "Smart Safety"];
      return (
        '<span class="' +
        swiperBtn +
        '"><span class="pagination-btn">' +
        list[index] +
        "</span></span>"
      );
    },
  },
  breakpoints: {
    // 화면의 넓이가 768px 이상일 때
    768: {
      spaceBetween: 16,
    },
    1024: {
      spaceBetween: 24,
    },
  },
  speed: 400,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
});

// 건설사 이미지 셋팅
const partnership = [
  "dar",
  "doosan2",
  "dw",
  "han",
  "hs",
  "hy",
  "lotte",
  "posco",
];
const partnershipList = () => {
  const list = document.querySelectorAll(".partnership-slide");

  for (let i = 0; i < list.length; i++) {
    partnership.forEach((item) => {
      const image = document.createElement("div");
      image.className = "slide-image";
      const img = document.createElement("img");
      img.src = `./img/logo/${item}.png`;
      image.appendChild(img);
      list[i].appendChild(image);
    });
  }
};
