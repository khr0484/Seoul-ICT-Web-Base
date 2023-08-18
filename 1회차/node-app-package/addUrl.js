const http = require('http');
const fs = require('fs');
const url = require('url');
var morgan = require('morgan')
 
var logger = morgan('tiny')
const hostname = '127.0.0.1'; // 로컬호스트
const port = 3000; // 포트번호
 
const server = http.createServer(function (req, res) {
  
  // 서버 앱 내에서 접근할 경로를 해석한다
  const pageURL = req.url; // 요청 주소
  const pathname = url.parse(pageURL, true).pathname; // parse메소드가 주소를 읽어서 해석한다

  logger(req, res, function (err) {
    if (err) return console.log(err)

    if (pathname === "/"){
      
    fs.readFile("./public/lotto.html", function(err, data){
      res.statusCode = 200;
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    })
 
    // style.css를 읽어들이고 싶다
  } else if (pathname === "/style.css"){
      fs.readFile("./public/style.css", 'utf8', function(err, data){
        res.writeHead(200);
        res.write(data);
        res.end();
      })
      // script.js를 읽어들이고 싶다
  } else if (pathname === "/script.js"){
    fs.readFile("./public/script.js", 'utf8', function(err, data){
      res.writeHead(200);
      res.write(data);
      res.end();
    })
  }

  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});