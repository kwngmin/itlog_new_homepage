// 로드 후 실행
window.addEventListener("DOMContentLoaded", () => {
  partnershipList();
  if (window.scrollY > 100) {
    document.getElementById("header").classList.remove("header-active");
  } else {
    document.getElementById("header").classList.add("header-active");
  }
});
// 사이즈 변경 되면 실행
window.addEventListener("resize", () => {});
let hammerCount = true;
let ideaCount = true;
let handCount = true;
// 스크롤 하면 실행
window.addEventListener("scroll", () => {
  if (window && window.scrollY === 0) {
    hammerCount = true;
    ideaCount = true;
    handCount = true;
  }
  if (window && window.scrollY > 100) {
    document.getElementById("header").classList.remove("header-active");
    scrollTop();
  }
  // 노하우 카운트 시작
  const numList = document.querySelectorAll(".knowhow-num");
  if (hammerCount) {
    const type = "hammer";
    numList.forEach((el, idx) => {
      if (el.classList.contains("aos-animate")) {
        const countList = document.querySelectorAll("#hammer-num");
        countList[idx] &&
          counter(
            countList[idx],
            countList[idx].getAttribute("data-count"),
            idx,
            countList[idx].getAttribute("data-time"),
            type
          );
      }
    });
  }
  if (ideaCount) {
    const type = "idea";
    numList.forEach((el, idx) => {
      if (el.classList.contains("aos-animate")) {
        const countList = document.querySelectorAll("#idea-num");
        countList[idx] &&
          counter(
            countList[idx],
            countList[idx].getAttribute("data-count"),
            idx,
            countList[idx].getAttribute("data-time"),
            type
          );
      }
    });
  }
  if (handCount) {
    const type = "hand";
    numList.forEach((el, idx) => {
      if (el.classList.contains("aos-animate")) {
        const countList = document.querySelectorAll("#hand-num");
        countList[idx] &&
          counter(
            countList[idx],
            countList[idx].getAttribute("data-count"),
            idx,
            countList[idx].getAttribute("data-time"),
            type
          );
      }
    });
  }
});
// 노하우 숫자 카운팅
const counter = (el, data, idx, time, type) => {
  if (type === "hammer") {
    hammerCount = false;
  }
  if (type === "idea") {
    ideaCount = false;
  }
  if (type === "hand") {
    handCount = false;
  }
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
setTimeout(function () {
  const swiper = new Swiper(
    ".productSwiper-container",
    {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 12,
      rewind: true,
      pagination: {
        el: ".swiper-pagination",
        // clickable: true,
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
      // autoplay: {
      //   delay: 6000,
      //   disableOnInteraction: false,
      // },
    },
    100
  );
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
