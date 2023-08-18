// 필요한 모듈을 불러온다
const http = require('http'); // Node.js의 http 모듈
const fs = require('fs'); // 파일 시스템 모듈
let morgan = require('morgan'); // http 요청 로그를 기록하는 모듈

// Morgan 모듈을 사용하여 'combined' 형식의 로그를 기록하는 객체를 생성
let logger = morgan('combined');

// 서버의 호스트네임과 포트를 설정
const hostname = '127.0.0.1';
const port = 3000;

// http 서버를 생성, 요청을 처리하는 콜백 함수를 전달
const server = http.createServer(function(req,res){
    // Morgan을 사용하여 http 요청 로그를 기록
    logger(req, res, function (err){
        // 오류가 있다면 오류 메시지를 출력하고 함수를 종료
        if (err) return console.log(err);

        // "./public/clock.html" 파일을 읽어서 처리하는 부분
        fs.readFile("./public/clock.html", function(err, data){
            // http 응답 상태 코드와 헤더를 설정
            res.statusCode = 200;
            res.writeHead(200, { 'Content-Type' : 'text/html' });

            // 읽어온 html 데이터를 클라이언트에게 전송
            res.end(data);    
        });
    });
});

// 서버를 지정된 호스트와 포트에서 실행
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });