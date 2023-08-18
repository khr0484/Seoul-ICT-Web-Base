import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [images, setImages] = useState([]);
  const [numImages, setNumImages] = useState(1); // 이미지 숫자 상태 1에서 시작


  const fetchImages = async () => {
    try {
      const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${numImages}`);
      setImages(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <input
        type="number"
        value={numImages}
        onChange={(e) => setNumImages(e.target.value)}
        min="1"max="50" />
      <button
        onClick={() => {
          fetchImages();
        }}
      >
        이미지 가져오기
      </button>
      <br />
      {images.map((image, index) => (
        <img key={index} src={image} alt={`랜덤 강아지 이미지 ${index}`} width="300" height="300" />
      ))}
    </>
  );
};

export default App;
