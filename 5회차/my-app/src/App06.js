import { createContext, useContext } from 'react'

// 스타일 테마 하나를 만들어서 그것들 전체 컴포넌트에 뿌리자!
const themeDefault = { border: '10px solid beige' }
const themeContext = createContext(themeDefault) // 이게 바로 컨텍스트!

export default function App(){

    const theme = useContext(themeContext)

    // 프로바이더의 하위 컴포넌트라면 누구(?)나 컨텍스트를 받아서 쓸 수 있다.
    return <themeContext.Provider value={themeDefault}>
      <div>
        <h1>여기는 App 컴포넌트</h1>
        <Sub1 />
      </div>
    </themeContext.Provider>
}

function Sub1(){
    const theme = useContext(themeContext)
    return <div style={theme}>
        나는야 하위 컴포넌트 Sub1
        <Sub2 />
    </div>
}

function Sub2(){
    const theme = useContext(themeContext)
    return <div style={theme}>
        나는야 하위 컴포넌트 Sub2
        <Sub3 />
    </div>
}

function Sub3(){
    const theme = useContext(themeContext)
    return <div style={theme}>
        나는야 하위 컴포넌트 Sub3
    </div>

}