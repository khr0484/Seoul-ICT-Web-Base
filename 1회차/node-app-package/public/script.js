// 요소 선택 및 상수 선언
const todaySpan = document.querySelector("#today") // 오늘 날짜를 표시할 span 요소 선택
const numbersDiv = document.querySelector('.numbers') // 번호를 표시할 div 요소 선택
const drawButton = document.querySelector('#draw') // 추첨 버튼 선택
const resetButton = document.querySelector('#reset') // 초기화 버튼 선택
const lottoNumbers = [] // 추첨된 로또 번호를 저장할 배열을 생성
// 각 번호의 배경색을 지정할 색상 배열 생성
const colors = ['orange', 'skyblue', 'red', 'purple', 'green'] 

// 현재 날짜 정보를 가져온다
const today = new Date()
let year = today.getFullYear()
let month = today.getMonth() + 1
let date = today.getDate()
// 오늘 날짜를 표시하는 부분에 현재 날짜 정보를 추가
todaySpan.textContent = `${year}년 ${month}월 ${date}일 `

// paintNumber 함수
function paintNumber(number){ // 각 번호를 화면에 표시하는 함수 정의
  const eachNumDiv = document.createElement('div') // 새로운 div 요소를 생성
  eachNumDiv.classList.add('eachnum') // 클래스를 추가하여 스타일 적용
  // 번호에 따라 배격생을 결정하고 스타일을 적용
  let colorIndex = Math.floor(number / 10) 
  eachNumDiv.style.backgroundColor = colors[colorIndex]
  eachNumDiv.textContent = number // div 요소의 텍스트 내용을 설정하여 번호를 표시
  numbersDiv.appendChild(eachNumDiv) // 생성한 div 요소를 번호를 표시할 부모 div에 추가
}

// 추첨 버튼 클릭 이벤트 핸들링
drawButton.addEventListener('click', function(){ // drawButton 을 클릭했을때
  while(lottoNumbers.length < 6){
    let ran = Math.floor(Math.random() * 45) + 1 // 1부터 45 사이의 랜덤 숫자를 생성
    if(lottoNumbers.indexOf(ran) === -1){ // 중복제거
      lottoNumbers.push(ran)
      paintNumber(ran) // 추첨된 숫자를 화면에 보여주는 함수, 메소드x
    }
  }
})

// 다시 버튼 클릭 이벤트 핸들링
resetButton.addEventListener('click', function(){
  lottoNumbers.splice(0, 6) // 0부터 6개의 번호를 지운다
  numbersDiv.innerHTML = ""
})