import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Title, Button } from './styledComponents'
import { resultcontent } from './utilities/resultcontents'

const Result = () => {
    const dispatch = useDispatch()
    const ePoint = useSelector(state => state.ePoint)
    const sPoint = useSelector(state => state.sPoint)
    const tPoint = useSelector(state => state.tPoint)
    const jPoint = useSelector(state => state.jPoint)

    const [resultCharacter, setCharacter] = useState({})

    useEffect(() => {
        let result = ""
        result += ePoint > 0 ? "E" : "I"
        result += sPoint > 0 ? "S" : "N"
        result += tPoint > 0 ? "T" : "F"
        result += jPoint > 0 ? "J" : "P"

        const finalResult = resultcontent.find(content => {
            return content.type === result
        })
        setCharacter(finalResult)
    }, [])

    return (
        <div>
            <Title>
                <h2>결과는?</h2>
                <h3>{resultCharacter.type}</h3>
                <p><h3>{resultCharacter.description}</h3></p>
                <h6><p dangerouslySetInnerHTML={{__html: resultCharacter.description2}}></p> </h6>             
                {/* 이미지 추가 */}
                {resultCharacter.image && <img src={resultCharacter.image} alt={`${resultCharacter.type} 이미지`} style={{ width: '600px', height: '400px' }} />}
            </Title>
            <Button onClick={() => dispatch({ type: "RESET" })}>다시 하기</Button>
        </div>
    )
}

export default Result
