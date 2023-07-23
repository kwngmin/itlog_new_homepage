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
