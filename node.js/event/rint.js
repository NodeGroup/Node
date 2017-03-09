// EventEmitter 객체 생성
exports.timer = new process.EventEmitter();

// 이벤트 강제 실행
setInterval(function () {
    exports.timer.emit('tick');
},1000);

custom.emit('tick');