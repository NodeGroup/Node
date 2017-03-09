/* html 파일 읽어서 실행하는 소스 
var fs = require('fs');
var http = require('http');

http.createServer(function (requestm, response) {
   fs.readFile('HTMLPage.html', function (error, data) {
       response.writeHead(200, {'Content-Type': 'text/html'});
       response.end(data);
   })
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
*/

/* Content-Type 에 따른 서버 
var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
    fs.readFile('map.jpg', function (error, data) {
        response.writeHead(200, {'Content-Type':'image/jpeg'});
        response.end(data);
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

http.createServer(function (request, response) {
    fs.readFile('music.mp3', function (error, data) {
        response.writeHead(200, {'Content-Type':'audio/mp3'});
    });
}).listen(52274, function () {
    console.log('Server Running at http://127.0.0.1:52274');    
});
*/

/* 쿠키생성
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type':'text/html',
        // 쿠키 생성 breakfast, dinner 쿠키 생성
        'set-Cookie':['breakfast = toast', 'dinner = chicken']
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
 */

/* 쿠키에 특정 속성 추가
var http = require('http');

http.createServer(function (request, response) {
    var date = new Date();
    date.setDate(date.getDate + 7);

    response.writeHead(200,{
        'Content-Type':'text/html',
        'set-Cookie':[
            'breakfast = toast;Expires = ' + date.toUTCString(),
            'dinner = chicken'
        ]
    });
    response.end('<h1>' + request.headers.cookie + '</h1>');
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});
*/

/*페이지 강제 이동 Location 사용
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(302, {'Location': 'https://www.hanbit.co.kr' });
    response.end();
}).listen(57723, function () {
    console.log('Server Running at http://127.0.0.1:52273');    
});
*/

