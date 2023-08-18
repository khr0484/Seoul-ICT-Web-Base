import { createStore } from 'redux';

// 카드 개별 항목에 대한 내용을 담은 배열
// detail : 상세 페이지에 담고 싶은 내용을 객체 리터럴로 표현한 키
// 문자열 형태로 표현된 마크업을 리액트 컴포넌트 내에서 실제 마크업으로 변환해서 사용해야! dangerouslySetInnerHTML
const contents = [
  { 
    path:"/Messi",
    imagePath: "messi2.png",
    title: "리오넬 메시",
    character: "인터 마이애미 CF",
    number: "No. 10",
    background: "red",
    detail: {
      detailImage: "messi3.jpg",
      title: "인터 마이애미 CF No. 10 리오넬 메시",
      description: "출생 : 1987년 6월 24일 (36세)\n국적 : 아르헨티나\n포지션 : 공격수\n통산 득점 816골",
      videoSrc: '<iframe width="600" height="400" src="https://www.youtube.com/embed/3NeDP4C_oRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    }
  },{ 
    path:"/Ronaldo",
    imagePath: "ronaldo2.png",
    title: "호날두",
    character: "알 나스르 FC",
    number: "No. 7",
    detail: {
      detailImage: "ronaldo4.jpg",
      title: "알 나스르 FC No. 7 호날두",
      description: "출생 : 1985년 2월 5일 (38세)\n국적 : 포르투갈\n포지션 : 공격수\n통산 득점 844골",
      
      videoSrc: '<iframe width="600" height="400" src="https://www.youtube.com/embed/4e0D5YrXZsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
  },{ 
    path:"/Neymar",
    imagePath: "neymar2.png",
    title: "네이마르",
    character: "알 힐랄 SFC",
    number: "No. 10",
    detail: {
      detailImage: "neymar3.jpg",
      title: "알 힐랄 SFC No. 10 네이마르",
      description: "출생 : 1992년 2월 5일 (31세)\n국적 : 브라질\n포지션 : 공격수\n통산 득점 473골",
      videoSrc: '<iframe width="600" height="400" src="https://www.youtube.com/embed/6c4bzF1_-Ms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
  },{ 
    path:"/Lewandowski",
    imagePath: "ski2.png",
    title: "레반도프스키",
    character: "FC 바르셀로나",
    number: "No. 9",
    detail: {
      detailImage: "ski3.png",
      title: "FC 바르셀로나 No. 9 레반도프스키",
      description: "출생 : 1988년 8월 21일 (34세)\n국적 : 폴란드\n포지션 : 공격수\n통산 득점 622골",
      videoSrc: '<iframe width="600" height="400" src="https://www.youtube.com/embed/1jTdVm5_YaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
  },{ 
    path:"/Son",
    imagePath: "son2.png",
    title: "손흥민",
    character: "토트넘 홋스퍼 FC",
    number: "No. 7",
    detail: {
      detailImage: "son3.png",
      title: "토트넘 홋스퍼 FC No. 7 손흥민",
      description: "출생 : 1992년 7월 8일 (31세)\n국적 : 대한민국\n포지션 : 공격수\n통산 득점 231골",
      videoSrc: '<iframe width="600" height="400" src="https://www.youtube.com/embed/SGq93tkmJ1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
  },{ 
    path:"/Kane",
    imagePath: "kane2.png",
    title: "해리 케인",
    character: "FC 바이에른 뮌헨",
    number: "No. 9",
    detail: {
      detailImage: "kane3.png",
      title: "FC 바이에른 뮌헨 No. 9 해리 케인",
      description: "출생 : 1993년 7월 28일 (30세)\n국적 : 잉글랜드\n포지션 : 공격수\n통산 득점 349골",
      videoSrc: '<iframe width="600" height="400" src="https://www.youtube.com/embed/xWwnzovG8ec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
  },{ 
    path:"/Mbappe",
    imagePath: "mbappe2.png",
    title: "음바페",
    character: "파리 생제르맹 FC",
    number: "No. 7",
    detail: {
      detailImage: "mbappe.jpg",
      title: "파리 생제르맹 FC No. 7 음바페",
      description: "출생 : 1998년 12월 20일 (24세)\n국적 : 프랑스\n포지션 : 공격수\n통산 득점 280골",
      videoSrc: '<iframe width="600" height="400" src="https://www.youtube.com/embed/wY_B-u9Wb-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
  },{ 
    path:"/Griezmann",
    imagePath: "griezmann2.png",
    title: "그리즈만",
    character: "AT 마드리드",
    number: "No. 7",
    detail: {
      detailImage: "gri.jpg",
      title: "AT 마드리드 FC No. 7 그리즈만",
      description: "출생 : 1991년 3월 21일 (32세)\n국적 : 프랑스\n포지션 : 공격수\n통산 득점 287골",
      videoSrc: '<iframe width="600" height="400" src="https://www.youtube.com/embed/sCk5Ju_XMT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
  },{ 
    path:"/De Bruyne",
    imagePath: "kdb2.png",
    title: "더 브라위너",
    character: "맨체스터 시티 FC",
    number: "No. 17",
    detail: {
      detailImage: "kdb3.png",
      title: "맨체스터 시티 FC FC No. 17 더 브라위너",
      description: "출생 : 1991년 6월 28일 (32세)\n국적 : 벨기에\n포지션 : 미드필더",
      videoSrc: '<iframe width="600" height="400" src="https://www.youtube.com/embed/A4csfGJ_B-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
  },{ 
    path:"/Haaland",
    imagePath: "haaland2.png",
    title: "엘링 홀란드",
    character: "맨체스터 시티 FC",
    number: "No. 9",
    detail: {
      detailImage: "Haaland.jpg",
      title: "맨체스터 시티 FC No. 9 엘링 홀란드",
      description: "출생 : 2000년 7월 21일 (23세)\n국적 : 노르웨이\n포지션 : 공격수\n통산 득점 213골",
      videoSrc: '<iframe width="560" height="315" src="https://www.youtube.com/embed/whbNBfb7XHk?si=yBlp8_kpMP4i356w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
  },{ 
    path:"/Kroos",
    imagePath: "kroos2.png",
    title: "토니 크로스",
    character: "레알 마드리드",
    number: "No. 8",
    detail: {
      detailImage: "kroos.jpg",
      title: "레알 마드리드 No. 8 토니 크로스",
      description: "출생 : 1990년 1월 4일 (33세)\n국적 : 독일\n포지션 : 미드필더",
      videoSrc: '<iframe width="600" height="400" src="https://www.youtube.com/embed/eu3ZkmX4UH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
  },{ 
    path:"/Salah",
    imagePath: "salah2.png",
    title: "모하메드 살라",
    character: "리버풀 FC",
    number: "No. 11",
    detail: {
      detailImage: "salah.jpg",
      title: "리버풀 FC No. 11 모하메드 살라",
      description: "출생 : 1992년 6월 15일 (31세)\n국적 : 이집트\n포지션 : 공격수",
      videoSrc: '<iframe width="600" height="400" src="https://www.youtube.com/embed/qf97zip1T9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
  },{ 
    path:"/rice",
    imagePath: "rice.png",
    title: "데클란 라이스",
    character: "아스날 FC",
    number: "No. 41",
    detail: {
      detailImage: "rice.jpg",
      title: "아스날 FC No. 41 데클란 라이스",
      description: "출생 : 1999년 1월 14일 (24세)\n국적 : 잉글랜드\n포지션 : 미드필더",
      videoSrc: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9UnJz0hsMb8?si=f-yC0dsYxGz_ar_n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
  },{ 
    path:"/dejong",
    imagePath: "dejong.png",
    title: "프렝키 더용",
    character: "FC 바르셀로나",
    number: "No. 21",
    detail: {
      detailImage: "dejong2.png",
      title: "FC 바르셀로나 No. 21 프렝키 더용",
      description: "출생 : 1997년 5월 12일 (26세)\n국적 : 네덜란드\n포지션 : 미드필더",
      videoSrc: '<iframe width="560" height="315" src="https://www.youtube.com/embed/adcZC_Md4Wc?si=3D8Bi-LPuO2Lom-e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
  },
]

// 이 앱에서는 상태에 대한 변경(수정 및 삭제)을 진행하지 않는다
function reducer(state, action) {
  return { contents } ;
}


// 리듀서 : 상태 관리를 담당하는 함수
// 리듀서를 전달받아서 저장소를 생성하는 함수가 바로 createStore!
export const store = createStore(reducer);