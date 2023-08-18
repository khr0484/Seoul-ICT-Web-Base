 // 노드 기반의 서버를 생성하자!
 // http 기반의 데이터 송수신을 진행하는 서버
 const http = require('http');

 const hostname = '127.0.0.1'; // 로컬호스트 (나 자신)
 const port = 3000; // 데이터가 송수신 되어지는 통로
 
 // req : 요청, res : 응답
 const server = http.createServer(
 (req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World');
 });
 

 // 서버가 구동 중인 상태
 server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });