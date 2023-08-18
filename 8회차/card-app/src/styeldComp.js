import styled from 'styled-components'

const LogoImage = 'logo.png'

// 상단에 제목이 표시되는 바
export const Menu = styled.div`
  position: sticky; top: 0;
  width: 100%; height: 100px;
  font-size: 18px;
  color: #FFFFFF;
  display: flex; 
  justify-content: center;
  align-items: center;  
  background: #4d4d4d url(${LogoImage}) no-repeat left/contain; /* 배경 이미지 설정 */
  background-size: 110px;

  
`

// 카드 여러개가 포함되는 컨테이너 블록
export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%; margin: 0 auto;

  @media all and (max-width: 1500px){
    width: 80%;
  }
  @media all and (max-width: 1000px){
    width: 100%;
  }
`

// 카드 한장
// 스타일드컴포넌트에서 &의 의미 : 자기 자신
// hover : 마우스가 올려진 상태를 의미하는 의사 클래스
export const Item = styled.div`
  cursor: pointer;
  width: 10%;
  height: 370px;
  margin: 2%;
  border-radius: 20px;
  font-size: 13px;
  color: #FFFFFF;
  background-color: #393939;
  overflow: hidden;
  position: relative; /* 추가 */
  transition: transform 0.3s ease-in-out; /* 추가 */

  &:hover {
    transform: scale(1.3); /* 마우스 호버 시 이미지 확대 */
  }

  @media all and (max-width: 800px) {
    width: 46%;
  }
  @media all and (max-width: 500px) {
    width: 98%;
  }
`;

// 카드 내부에 이미지를 표시할 필요가 있을 때 사용하는 태그
export const Image = styled.div`
  height: 220px; 
  background-image: url(${props => props.imagePath});
  background-repeat: no-repeat;
  background-size: cover; /* 이미지가 잘리지 않도록 조절 */
  background-position: center; /* 이미지를 가운데에 위치시킴 */
  
  
  @media all and (max-width: 500px){
    background-size: cover;
  }
`


// 카드 내부에 그냥 색깔로만 표시하고 싶다면 이걸 쓴다
export const ColorBox = styled.div`
  height: 250px; 
  background-color: ${props => props.color};
  background-repeat: no-repeat;
  background-size: cover;
  @media all and (max-width: 500px){
    background-size: 100% 100%;
  }
`
