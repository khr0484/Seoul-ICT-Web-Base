import React from 'react';
import { useNavigate } from 'react-router-dom';

const Detail = (props) => {
  const navigate = useNavigate();
  const { detailImage, title, description, videoSrc } = props.content;

  const containerStyle = {
    paddingTop: 100,
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'right', // 세로 가운데 정렬을 위해 추가
    backgroundImage: `url(${detailImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    
    // animation: 'shake 0.5s ease-in-out infinite',
  };

  

  // @keyframes 규칙 정의
// const keyframes = `
// @keyframes shake {
//   0%, 100% { transform: translateX(0); }
//   10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
//   20%, 40%, 60%, 80% { transform: translateX(5px); }
// }

// `;
// const styleSheet = document.styleSheets[0];
// styleSheet.insertRule(keyframes, styleSheet.cssRules.length);


  const videoContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-start', // 왼쪽으로 정렬
    width: '100%',
    paddingLeft: '11%', // 왼쪽 여백 추가
  };

  
  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2>{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br>') }}></p>
        </div>
      </div>
      <div style={videoContainerStyle}>
        <div dangerouslySetInnerHTML={{ __html: videoSrc }}></div>
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <button  class="soccer-pattern-button" onClick={() => navigate(-1)}>BACK</button>
      </div>
    </div>
  );
};

export default Detail;
