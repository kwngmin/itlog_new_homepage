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
// 주소 복사하기
const copyAddress = () => {
  // div 내부 텍스트 취득
  const address = document.getElementById("address").innerText;
  // textarea 생성
  const textArea = document.createElement("textarea");
  // textarea 추가
  document.body.appendChild(textArea);
  // textara의 value값으로 div내부 텍스트값 설정
  textArea.value = address;
  // textarea 선택 및 복사
  textArea.select();
  document.execCommand("copy");
  // textarea 제거
  document.body.removeChild(textArea);
  // 주소가 복사되었습니다 alert 띄우기
  document.getElementById("alert-copy").style.display = "block";
};
// 주소가 복사되었습니다 alert 없애기
const closeAlertCopy = () => {
  document.getElementById("alert-copy").style.display = "none";
};
// 네이버 지도
// naver.maps.Service.geocode(
//   { query: "디지털로33길 28" },
//   function (status, response) {
//     if (status === naver.maps.Service.Status.ERROR) {
//       return alert("Something wrong!");
//     }
//     console.log(response);
//     // 성공 시의 response 처리
//   }
// );
// var map = new naver.maps.Map("map", mapOptions);
// var mapOptions = {
//   center: new naver.maps.LatLng(37.3595704, 127.105399),
//   zoom: 15,
// };
// var marker = new naver.maps.Marker({
//   position: new naver.maps.LatLng(37.3595704, 127.105399),
//   map: map,
// });
var HOME_PATH = window.HOME_PATH || ".";
var position = new naver.maps.LatLng(37.486742, 126.8954755);
// var position = new naver.maps.LatLng(37.3849483, 127.1229117);

var map = new naver.maps.Map("map", {
  center: position,
  zoom: 16,
  zoomControl: true,
  zoomControlOptions: {
    style: naver.maps.ZoomControlStyle.SMALL,
    position: naver.maps.Position.TOP_RIGHT,
  },
});

var markerOptions = {
  position: new naver.maps.LatLng(37.486742, 126.8954755),
  map: map,
  // position: position.destinationPoint(90, 15),
  // map: map,
  // icon: {
  //   url: HOME_PATH + "/img/logo/dar.png",
  //   // url: HOME_PATH + "/img/logo/itlog.svg",
  //   size: new naver.maps.Size(50, 52),
  //   // size: new naver.maps.Size(120, 52),
  //   origin: new naver.maps.Point(0, 0),
  //   anchor: new naver.maps.Point(25, 26),
  // },
};

var marker = new naver.maps.Marker(markerOptions);
