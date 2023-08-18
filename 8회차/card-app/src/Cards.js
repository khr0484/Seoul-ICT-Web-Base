import React from 'react'
import { NavLink } from 'react-router-dom'
import { Items, Item, Image, ColorBox } from './styeldComp'
import { useSelector } from 'react-redux';

const Cards = () => {
  const contents = useSelector((state) => state.contents) // 개별 카드 항목으로 구성된 배열
  return (
  <Items>
    {contents.map((content, idx) => {
      return <Item key={idx}>
      <NavLink to={content.path}>
      <Image imagePath={content.imagePath}>
      </Image>
        {/* <ColorBox color={content.imagePath}></ColorBox> */}
        
      </NavLink>
      
      <h1 style={{textAlign:'center'}}>{content.title}</h1>
      <p style={{padding: 10}}>{content.character}<p></p>{content.number}</p>
      

    </Item>
    })}
  </Items>
  )
}

export default Cards;