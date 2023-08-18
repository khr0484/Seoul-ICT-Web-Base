import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.form`
  width: 33%;
  min-width: 375px;
  display: flex;
  margin-top: 40px;
`

export const TextInput = styled.input`
  width: 80%;
  height: 5rem;
  padding: 1.8rem;
  border: none;
  border-radius: 3rem 0 0 3rem;
  font-size: 1.2rem;
  &:focus{
    outline: none;
  }
`

export const SubmitInput = styled.input`
  width: 20%;
  height: 5rem;
  border: none;
  border-radius: 0 3rem 3rem 0;
  color: tomato;
  background: radial-gradient(#00c3ff, 
    #ffff1c);
  font-size: 1.2rem;
  @font-face {
    font-family: 'TTTtangsbudaejjigaeB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/TTTtangsbudaejjigaeB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
  font-family: 'TTTtangsbudaejjigaeB';
`

export const UnorderdList = styled.ul`
  width: 33%;
  min-width: 375px;
  height: 10rem;
  padding: 10;
  list-style-type: none;
  padding: 0rem;
`

export const ListItem = styled.li`
  padding: 0.8rem;
  margin-bottom: 0.8rem;
  border-radius: 1rem; 
  position: relative;
  background-color: beige;
  padding-left: 1.4rem;
  animation: bounce 0.5s ease;
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(50px);
    }
  }
  font-size: 150%
  
`
export const TodoText = styled.span`
  display: inline-block;
  width: 90%;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: black;
  @font-face {
    font-family: 'TTTtangsbudaejjigaeB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/TTTtangsbudaejjigaeB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
  font-family: 'TTTtangsbudaejjigaeB';
  font-size: 100%
`

export const TodoDelete = styled.button`
width: 10%;
height: 1.5rem;
border: none;
border-radius: 0.5rem; 
background-color: transparent;
font-weight: 900;
position: absolute;
right: 0;
@font-face {
    font-family: 'TTTtangsbudaejjigaeB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/TTTtangsbudaejjigaeB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
  font-family: 'TTTtangsbudaejjigaeB';
  font-size: 120%
`

export const NowDate = styled.span` 
@font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
margin-top: 20px; 
font-family: 'PyeongChangPeace-Bold';
min-width: 375px;
font-size: 32px
`
