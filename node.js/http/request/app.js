var http = require('http');
var fs = require('fs');
var url = require('url');

// url속성을 사용
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;

    if(pathname == '/'){
        fs.readFile('index.html', function (error, data) {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        });
    } else if(pathname == '/OtherPage'){
        fs.readFile('OtherPage.html', function (error, data) {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        });
    }
}).listen(52273, function () {
        console.log('Server Running at http://127.0.0.1:52273');
});