import React from 'react'
import { Title, Button } from './styledComponents'
import { useDispatch } from 'react-redux'

const Home = () => {

    const dispatch = useDispatch()
    
    return <div style={{  textAlign: 'center' }}>
        <Title>
            <h1>범죄도시 MBTI 테스트</h1>
            <p>나와 비슷한 범죄도시 캐릭터는?</p>
        </Title>
        <Button onClick={() => dispatch({ type: 'BEGIN' })}>시작하기</Button>
        <p>MADE BY HONG</p>
    </div>
}

export default Home