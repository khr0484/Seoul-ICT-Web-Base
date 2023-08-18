
const sayGoodbye = function(){
    console.log("good bye!")
  }
  
  // 화살표 함수
  const sayNice = function(){
    console.log("nice!")
  }
  
  module.exports = {   // 내보내고 싶은 객체를 하나로 묶어준다.
    sayGoodbye, sayNice
  }