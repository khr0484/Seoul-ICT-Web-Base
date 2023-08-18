import React, { useState, useEffect } from 'react'
import "./App.css" 
import { Container, Form, TextInput, SubmitInput, UnorderdList, ListItem, TodoText, TodoDelete, NowDate } from './styledComponents'

function App(){
  
  const [ todo, setTodo ] = useState([])
  const [ todoId, setTodoId ] = useState(0)

  /*
   할일이 단순히 문자열이면 안되는 이유
   - 삭제나 수정을 할 때 구분할 방법이 없다.
   => 따라서 하나의 할일은 하나의 객체로 관리하는 것이 좋다.
   할일 하나는 객체 하나다.
  */

  const handleSubmit = (todoText) => {
    if (!todoText) {
      alert("할 일을 입력 해주세요!"); // 입력 값이 없을 경우 알림 메시지
    
      return;
      
    }
    setTodo([ ...todo, {
      todoText: todoText,
      todoId: todoId,
      todoDone: false
    } ]) 
    setTodoId(todoId + 1)
  }

  const handleToggle = (todoId) => {
    setTodo(
    todo.map((item, index) => {
      return item.todoId === todoId ? { ...item, todoDone: !item.todoDone} : item
     })
   )
  }

  // 삭제 기능
  // 필터의 기능 : 콜백함수가 true를 반환하는 요소만 남겨진 배열을 만든다
  const handleDelete = (todoId) => {
    setTodo(
    todo.filter((item) => {
      return item.todoId !== todoId
     })
    )
    alert("삭제 완료!");
  }
  
  // 컴포넌트가 만들어지는 순간마다 로컬스토리지 읽어들이기
  useEffect(() => {
    const defaultTodo = JSON.parse(localStorage.getItem("todo"))
     
    // 로컬스토리지가 비어있었다면 이 함수는 의미가 없다
    if(!defaultTodo) return;

    setTodo(defaultTodo)

    if(defaultTodo.length !== 0){
      setTodoId
      (defaultTodo[defaultTodo.length -1].todoId + 1)
    }

  }, [])

  // todo가 갱신될 때마다 로컬스토리지에 저장하기
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay()
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const now = `${year}년 ${month}월 ${date}일 (${daysOfWeek[day]})`;


  return <Container>
    
    <NowDate>{now} 할일 목록</NowDate>
    
    <Form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(e.target.todo.value)
      e.target.todo.value = ""
    }}> 
      <TextInput type="text" placeholder='할일 입력' name="todo" />
      <SubmitInput type="submit" value="추가" />
    </Form>
    <UnorderdList>
      {todo.map((item, index) => {
        return <ListItem key={index}>
          <TodoText onClick={() => {
            handleToggle(item.todoId)
          }}  style={{
            textDecoration: item.todoDone ? 'line-through' : 'none',
            color: item.todoDone ? 'blue' : 'black'
            
          }}
        >{item.todoText}</TodoText>
          <TodoDelete onClick={() => {
            handleDelete(item.todoId)
          }}>🗑</TodoDelete>
          
          </ListItem>
      })}
    </UnorderdList>
  </Container>

}

export default App
