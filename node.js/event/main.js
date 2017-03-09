// exit 이벤트 on
process.on('exit', function(code){
    console.log('안녕');
})

// uncaughtException 이벤트 on
process.on('uncaughtException',function(error){
    console.log('에러발생');
})

// 2초 간격으로 3번 예외 발생
var cnt = 0;
var test = function () {
    cnt = cnt + 1;
    if(cnt < 3){
        return;
    }

    setTimeout(test,2000);
    error.error.error();
};
setTimeout(test,2000);

// setMaxListeners(limit) -> 이벤트 리스너 연결 개수를 조절한다. 0 => 무한대

var onUncaughtException = function (error) {
    console.log("exception is comming");

    // 이벤트 제거
    process.removeListener('uncaughtException',onUncaughtException);
}

process.on('uncaughtException',onUncaughtException);

var test = function () {
    setTimeout(test,2000);
    error.error.error();
};
setTimeout(test,2000);

// once(eventName, eventHandler) -> 이벤트 리스너를 한 번만 연결한다.

process.once('uncaughtException', function (error) {
    console.log('예외가 발생하였다.');
});

var test = function (){
    setTimeout(test, 2000);
    error.error.error();
};

setTimeout(test,2000);

// emit(eventName[,arg1][,arg1]) -> 이벤트 실행(강제)
process.on('exit',function(code){
    console.log('안녕히 계세요');
});

// 프로그램 종료
process.exit();

// exit 이벤트 강제 실행, 이벤트 강제 호출시 이벤트 리스너만 실행됨(중요);
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('프로그램 실행 중');

// EventEmitter -> 모든 이벤트는 EventEmitter 객체의 상속을 받는다.
// EventEmitter객체 생성
var custom = new process.EventEmitter();

custom.on('tick',function (code) {
    console.log('이벤트 실행');
});

custom.emit('tick');