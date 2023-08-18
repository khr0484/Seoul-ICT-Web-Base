import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, Navbar, Col, Row, Image, Carousel  } from 'react-bootstrap';

import "./App.css"
import "./Custom.css"

function App() {
  return (
    <> 
      <Navbar className="justify-content-center" sticky="top">
        <Nav>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar>
     
      <Container id="about" className="about-container">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">ABOUT Hongrae</h2>
          </Col>
        </Row>
        <Row className="w-75 m-auto" >
          <Col className='text-end'>
            {/* 이미지 파일의 경로는 public을 기본으로 한다. */}
            <Image src="./kim.jpg" alt="프로필 사진" 
            style={{ border: '10px solid tomato', width: 250 }} 
            roundedCircle/>
          </Col>
          <Col>
            <h3 className="about__category">PROFILE</h3>
            <p>
              # 김홍래 <br />
              정보통신공학과 전공 <br />
              프론트엔드 부트캠프 수강중<br />
              
              <br />
              # 장점 <br />
              성실함 <br />
              <br />
              # 단점 <br />
              내성적 <br />
              <br />
              # 취미 <br />
              축구 <br />

            </p>
            </Col>
        </Row>
      </Container>
      <Container id="portfolio" className="portfolio-container">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">PORTFOLIO</h2>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Carousel className='w-75 m-auto'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./todo.png"
                style={{ border: '10px solid tomato' }} 
                alt="First slide"
              />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./lotto.gif"
                style={{ border: '10px solid tomato' }} 
                alt="Second slide"
              />

              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./clock.gif"
                style={{ border: '10px solid tomato' }} 
                alt="Third slide"
              />

              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <Container id="contact" className="contact-container">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">CONTACT</h2>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "#ff6347", margin: 0, padding: 3 }}>MAIL</h3>
            <p style={{ margin: 0, padding: 10 }}>khr0484@naver.com</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "#ff6347", margin: 0, padding: 3 }}>PHONE</h3>
            <p style={{ margin: 0, padding: 10 }}>010-7455-0484</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "#ff6347", margin: 0, padding: 3 }}>BLOG</h3>
            <p style={{ margin: 0, padding: 10 }}>https://blog.naver.com/khr0484</p>
          </Col>
        </Row>
        
      </Container>
      <Row className='justify-content-center py-5'>
          Copyright &copy; Hongrae. All Right Reserved.
          </Row>
    </>
  );
}

export default App;