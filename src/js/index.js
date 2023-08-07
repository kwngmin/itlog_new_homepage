let iWIdth;
// 로드 후 실행
window.addEventListener("DOMContentLoaded", () => {
  iWIdth = window.innerWidth;
});
// 사이즈 변경 되면 실행
window.addEventListener("resize", () => {
  // iOS height 구하기
  // 회전으로 랜드스케이프 모드 변경시
  // 모바일 메뉴의 height 값 틀어지는거 보완
  const { innerHeight } = window;
  document.documentElement.style.setProperty(
    "--app-height",
    `${innerHeight}px`
  );
  iWIdth = window.innerWidth;
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
// iOS height 구하기
window.addEventListener("DOMContentLoaded", function (ev) {
  const { innerHeight } = window;
  document.documentElement.style.setProperty(
    "--app-height",
    `${innerHeight}px`
  );
});
let scrollPosition = 0;
// 데스크톱에서 리스트 열고 닫기
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
