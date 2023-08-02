let iWIdth;

// 로드 후 실행
window.addEventListener("DOMContentLoaded", () => {
  iWIdth = window.innerWidth;
});

// 사이즈 변경 되면 실행
window.addEventListener("resize", () => {
  iWIdth = window.innerWidth;
  // console.log(iWIdth);
  if (iWIdth > 1024) {
    closeNav();
    closeList();
  }
});

// 스크롤 하면 실행
window.addEventListener("scroll", () => {
  if (window && window.scrollY > 100) {
    document.getElementById("header").classList.remove("header-active");
    scrollTop();
  }
});

let scrollPosition = 0;

// 데스크톱에서 리스트 열기
const openAboutCompany = () => {
  document.getElementById("aboutProduct").style.display = "none";
  document.getElementById("desktopList-filter").style.display = "flex";
  document.getElementById("aboutCompany").style.display = "flex";
};
const openAboutProduct = () => {
  document.getElementById("aboutCompany").style.display = "none";
  document.getElementById("desktopList-filter").style.display = "flex";
  document.getElementById("aboutProduct").style.display = "flex";
};
const closeList = () => {
  document.getElementById("desktopList-filter").style.display = "none";
  document.getElementById("aboutCompany").style.display = "none";
  document.getElementById("aboutProduct").style.display = "none";
};

// 모바일에서 네브 열기
const openNav = () => {
  // 아이폰 height 구하기
  window.addEventListener("DOMContentLoaded", function (ev) {
    const { innerHeight } = window;
    document.documentElement.style.setProperty(
      "--app-height",
      `${innerHeight}px`
    );
  });
  scrollPosition = window.pageYOffset;
  document.body.classList.add("scroll-stop");
  document.body.style.top = `-${scrollPosition}px`;
  document.getElementById("sideNavOpenFilter").style.width = "100%";
  document.getElementById("mobileNav").style.height = "var(--app-height)";
  document.getElementById("mobileNav").style.display = "flex";
  document.getElementById("header").style.display = "none";
};
// 모바일에서 네브 닫기
const closeNav = () => {
  document.body.classList.remove("scroll-stop");
  document.body.style.removeProperty("top");
  window.scrollTo(0, scrollPosition);
  document.getElementById("sideNavOpenFilter").style.width = "0";
  document.getElementById("mobileNav").style.display = "none";
  document.getElementById("header").style.display = "flex";
};
// 모바일 사이드네브 아코디언메뉴
let accordion = document.querySelectorAll(".accordion");
let accordionMenu = document.querySelectorAll(".accordion-menu");
accordion.forEach((el) => {
  el.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.nextElementSibling.style.maxHeight = null;
      this.classList.remove("active");
    } else {
      accordionMenu.forEach((list) => {
        list.style.maxHeight = null;
        list.previousElementSibling.classList.remove("active");
      });
      this.nextElementSibling.style.maxHeight =
        this.nextElementSibling.scrollHeight + "px";
      this.classList.add("active");
    }
  });
});

// top버튼 이벤트
const scrollTop = () => {
  if (window.scrollY > 240) {
    document.getElementById("topButton").classList.add("top-active");
  } else {
    document.getElementById("topButton").classList.remove("top-active");
  }
};
document.getElementById("topButton").addEventListener("click", (event) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 메가메뉴 호버 이벤트
// document.getElementById("header").addEventListener("mouseover", (event) => {
//   if (iWIdth > 1023)
//     document.getElementById("header").className = "mega-active";
// });
// document.getElementById("header").addEventListener("mouseout", (event) => {
//   document.getElementById("header").classList.remove("mega-active");
// });

// let megaNav = document.querySelectorAll(".header-title");
// let megaList = document.querySelectorAll(".header-subList >div");
// for (let i = 0; i < megaNav.length; i++) {
//   megaNav[i].addEventListener("mouseover", function () {
//     this.classList.add("red");
//     megaList[i].style.borderTop = "2px solid #ee3a3d";
//   });
//   megaNav[i].addEventListener("mouseout", function () {
//     this.classList.remove("red");
//     megaList[i].style.borderTop = "2px solid #ced6e0";
//   });
// }
// for (let i = 0; i < megaList.length; i++) {
//   megaList[i].addEventListener("mouseover", function () {
//     megaNav[i].classList.add("red");
//     megaList[i].style.borderTop = "2px solid #ee3a3d";
//   });
//   megaList[i].addEventListener("mouseout", function () {
//     megaNav[i].classList.remove("red");
//     megaList[i].style.borderTop = "2px solid #ced6e0";
//   });
// }
