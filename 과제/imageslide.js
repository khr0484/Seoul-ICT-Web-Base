/*
  div사이즈 동적으로 구하기
*/
const outer = document.querySelector('.outer'); // document.querySelector : DOM에서 특정 선택자로 첫 번째 요소를 찾는 기능. outer, inner-list, inner요소들을 선택
const innerList = document.querySelector('.inner-list');
const inners = document.querySelectorAll('.inner'); //  document.querySelectorAll : DOM에서 특정 선택자로 모든 요소를 찾는 기능. inner 클래스에 해당하는 모든 요소들을 선택
let currentIndex = 0; // 현재 슬라이드 화면 인덱스

inners.forEach((inner) => {
  inner.style.width = `${outer.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
})

innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

/*
  버튼에 이벤트 등록하기
*/
const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

buttonLeft.addEventListener('click', () => {  // addaddEventListener : DOM 요소에 이벤트 리스너를 추가하는 메서드. 버튼에 클릭 이벤트를 처리하기 위해 사용
  currentIndex--;
  currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
  clearInterval(interval); // 기존 동작되던 interval 제거
  interval = getInterval(); // 새로운 interval 등록
});

buttonRight.addEventListener('click', () => {
  currentIndex++;
  currentIndex = currentIndex >= inners.length ? inners.length - 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
  clearInterval(interval); // 기존 동작되던 interval 제거
  interval = getInterval(); // 새로운 interval 등록
});

/*
  주기적으로 화면 넘기기
*/
const getInterval = () => {
  return setInterval(() => { // 일정한 시간 간격으로 지정된 작업을 반복하는 타이머 기능을 제공하는 함수. 이미지 슬라이드의 자동 전환을 위해 사용
    currentIndex++;
    currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
  }, 2000);
}

let interval = getInterval(); // interval 등록
 

