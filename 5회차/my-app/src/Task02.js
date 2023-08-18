import { useState } from 'react'
import axios from 'axios'

// https://dog.ceo/api/breeds/image/random/5
function App(){

  const [ number, setNumber ] = useState(2)
  const [ images, setImages ] = useState([])
  
  return <>
    <input type="number" onChange={(e) => { 
      setNumber(e.target.value)
    }} min="2" max="50" />
    <button onClick={async () => {
      const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${number}`)
      setImages(response.data.message)
    }}>강아지 가져와</button>
    <br />
    {images.map((item, index) => {
      return <img src={item} key={index} width="300" height="300" />
    })}
  </>
}

export default App