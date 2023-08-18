const scrollToTopButton = document.getElementById("scrollToTopButton");

// 스크롤 위치를 맨 위로 이동시키는 함수
function scrollToTop() {
    // requestAnimationFrame을 사용하여 부드러운 스크롤 효과 적용
    function scrollStep() {
        if (window.scrollY === 0) {
            cancelAnimationFrame(scrollStep);
            return; // 스크롤이 맨 위에 도달하면 함수를 종료
        }
        window.scrollTo(0, window.scrollY - 50); // 스크롤 속도 조절을 원하는 값으로 변경
        requestAnimationFrame(scrollStep);
    }
    requestAnimationFrame(scrollStep);
}

// 버튼 클릭 시 scrollToTop 함수 호출
scrollToTopButton.addEventListener("click", scrollToTop);