// rint.js 모듈 추출
var rint = require('./rint');

// 이벤트 실행
rint.timer.on('tick',function (code) {
    console.log('이벤트 실행');
});