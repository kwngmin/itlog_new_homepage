// 로드 후 실행
window.addEventListener("DOMContentLoaded", () => {});

// 사이즈 변경 되면 실행
window.addEventListener("resize", () => {});

// 스크롤 하면 실행
window.addEventListener("scroll", () => {
  if (window && window.scrollY > 100) {
    scrollTop();
  }
});
// 신청이 완료되었습니다 alert 없애기
const closeAlertNotice = () => {
  document.getElementById("alert-notice").style.display = "none";
};
// 신청이 완료되었습니다 alert 없애기
const closeAlertComplete = () => {
  // document.getElementById("alert-complete").style.display = "none";
  location.href = "../../consulting.html";
};
// 신청이 완료되었습니다 alert 없애기
const moveHome = () => {
  location.href = "../../index.html";
};
let terms = document.getElementById("spreadTerms");
terms.addEventListener("click", function () {
  if (document.getElementById("spreadTerms").innerText == "펼치기") {
    console.log("성공");
    document.getElementById("spreadTerms").innerHTML = "접기";
  } else {
    document.getElementById("spreadTerms").innerHTML = "펼치기";
  }
  document.querySelector(".consulting-agree").classList.toggle("terms-spread");
  document.querySelector(".consulting-agree").scrollIntoView();
});

const space = /\s/gi;
const phone = /[^0-9]/gi;
// const phone = /[^0-9\-]/gi;

const emailPattern =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const phonePattern = /01[016789][^0][0-9]{6,8}/;
// const phonePattern = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;

let input = document.querySelectorAll(".consulting-contents input[type=text]");
input.forEach((el) => {
  if (el.classList.contains("space-text")) {
    el.addEventListener("keyup", function () {
      let reg = this.value;
      this.value = reg.replace(space, "");
    });
  }
  if (el.classList.contains("phone-text")) {
    el.addEventListener("keyup", function () {
      let reg = this.value;
      this.value = reg.replace(phone, "");
    });
  }
});

const send = document.getElementById("consulting-submit");
send.addEventListener("click", function (event) {
  event.preventDefault(); // prevent reload

  const name = document.getElementById("nameInput");
  const email = document.getElementById("emailInput");
  const phone = document.getElementById("phoneInput");
  const company = document.getElementById("company");
  const content = document.getElementById("consulting-text");
  const agreeCheck = document.getElementById("agree-check").checked;
  let productCheck = [
    ...document.querySelectorAll('input[name="product-check"]:checked'),
  ];
  // 의뢰분야 나열하기
  let products = "";
  for (const el of productCheck) {
    if (products === "") {
      products += el.id;
    } else {
      products += `, ${el.id}`;
    }
  }
  let templateParams = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: content.value,
    company: company.value,
    products,
  };
  const serviceID = "service_4z61dki";
  const templateID = "template_iw6bwtl";
  const publicKey = "RMB0BR2O_InnNIHfC";
  // 폼 체크
  if (name.value.length < 2) {
    document.getElementById("alert-warning-content-text").innerHTML =
      "이름을 2자 이상 입력하세요";
    document.getElementById("alert-notice").style.display = "block";
    name.focus();
  } else if (!emailPattern.test(email.value)) {
    document.getElementById("alert-warning-content-text").innerHTML =
      "이메일을 다시 확인하세요";
    document.getElementById("alert-notice").style.display = "block";
    email.focus();
  } else if (!phonePattern.test(phone.value)) {
    document.getElementById("alert-warning-content-text").innerHTML =
      "전화번호를 다시 확인하세요";
    document.getElementById("alert-notice").style.display = "block";
    phone.focus();
  } else if (productCheck.length === 0) {
    // alert("의뢰분야를 하나 이상 선택하세요");
    document.getElementById("alert-warning-content-text").innerHTML =
      "의뢰분야를 하나 이상 선택하세요";
    document.getElementById("alert-notice").style.display = "block";
    productCheck.focus();
  } else if (content.value.length < 10) {
    // alert("상담내용을 10자 이상 입력하세요");
    document.getElementById("alert-warning-content-text").innerHTML =
      "상담내용을 10자 이상 입력하세요";
    document.getElementById("alert-notice").style.display = "block";
    content.focus();
  } else if (!agreeCheck) {
    // alert("개인정보 수집 및 이용 안내 내용에 동의하세요");
    document.getElementById("alert-warning-content-text").innerHTML =
      "이용 약관에 동의하세요";
    document.getElementById("alert-notice").style.display = "block";
    agreeCheck.focus();
  } else {
    document.getElementById("alert-loading").style.display = "block";
    // alert("신청되었습니다!");
    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("alert-loading").style.display = "none";
        document.getElementById("alert-complete").style.display = "block";
      },
      function (error) {
        console.log("FAILED...", error);
        document.getElementById("alert-loading").style.display = "none";
        document.getElementById("alert-warning-content-text").innerHTML =
          "요청에 실패하였습니다. 대표번호로 문의주시기 바랍니다.";
        document.getElementById("alert-notice").style.display = "block";
      }
    );
  }
});

// const closeAlert = document.getElementById("alert-warning");
// closeAlert.addEventListener("click", function (event) {
//   document.getElementById("alert-Warning").style.display = "none";
// });
