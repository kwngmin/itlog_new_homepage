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
const phone = /[^0-9\-]/gi;

const emailPattern =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const phonePattern = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;

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
send.addEventListener("click", function () {
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

  if (name.value.length < 2) {
    alert("성명을 2자 이상 입력하세요!");
    name.select();
    name.scrollIntoView(true);
  } else if (!emailPattern.test(email.value)) {
    alert("이메일을 다시 확인하세요!");
    email.select();
  } else if (!phonePattern.test(phone.value)) {
    alert("연락처를 다시 확인하세요!");
    phone.select();
  } else if (productCheck === 0) {
    alert("의뢰분야를 하나 이상 선택하세요!");
  } else if (content.value.length < 10) {
    alert("상담내용을 10자 이상 입력하세요!");
    content.select();
  } else if (!agreeCheck) {
    alert("개인정보 수집 및 이용 안내 내용에 동의하세요!");
  } else {
    alert("신청했습니다!");
  }
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
  emailjs.send(serviceID, templateID, templateParams, publicKey).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      location.href = "../../consulting.html";
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
});

// .send("gmail", "template_GH8tn3us", templateParams)
