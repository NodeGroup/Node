/* 서버 생성과 실행, listen(port, callback_fun) -> 서버 실행
var http = require('http');

// 웹 서버를 생성한다.
var server = http.createServer();

// 웹 서버 실행 (포트번호 : 52273)
server.listen(52273);
*/

/* close 메서드를 이용한 예제,  close(callback_fun) -> 서버 종료
var server = require('http').createServer();

server.listen(52273, function () {
    console.log('server running at http://127.0.0.1:52273');
});

var test = function () {
    server.close();
};
setTimeout(test, 10000);
*/

/* 
// server 객체의 이벤트
var http = require('http');

var server = http.createServer();

// client -> server 요청
server.on('request', function (code) {
    console.log('Request On');
});

// client -> server 연결 
server.on('connection', function (code) {
    console.log('Connection On');
});

server.on('close', function (code) {
    console.log('Close On');
});

server.listen(52273);
*/

/* 간단한 응답 메시지 작성
require('http').createServer(function (request, response) {
    response.writeHead(200, { 'content-Type' : 'text/html'});
    response.end('<h1>Hello Web Server with Node.js</h1>');
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
*/
