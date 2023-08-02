// 로드 후 실행
window.addEventListener("DOMContentLoaded", () => {
  let historyLeft = document.querySelectorAll(".history-box.left-box");
  if (window.innerWidth < 768) {
    historyLeft.forEach((el) => {
      console.log(el);
      el.classList.remove("left-box");
      el.classList.add("right-box");
    });
  }

  aosChange();
});

// 사이즈 변경 되면 실행
window.addEventListener("resize", () => {});

// 스크롤 하면 실행
window.addEventListener("scroll", () => {
  if (window && window.scrollY > 100) {
    scrollHeader();
    scrollTop();
  }
});

const aosChange = () => {
  if (matchMedia("screen and (max-width: 768px)").matches) {
    document.querySelectorAll(".card-img img").forEach((el) => {
      el.setAttribute("data-aos", "");
    });
  }
};

// 네이버 지도
var mapOptions = {
  center: new naver.maps.LatLng(37.3595704, 127.105399),
  zoom: 10,
};

var map = new naver.maps.Map("map", mapOptions);
