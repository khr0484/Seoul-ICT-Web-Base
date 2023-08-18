import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import axios from 'axios'

export default function App() {

  const [ dogimages, setDogImages ] = useState(null)

  return (
    <>
    <button onClick={async () => {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random/3")
        setDogImages(response.data.message)
    }}>이미지 가져오기</button>
    {dogimages ? <Carousel className='w-50'}
    
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dogimages[0]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>첫 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://via.placeholder.com/1280x960"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>두 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://via.placeholder.com/1280x960"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>세 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}