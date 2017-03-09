// 생성한 모듈을 다른 자바스크립트 파일에서 추출할 때는 require() 함수를 사용한다.
// require(module 파일 경로)
var module = require('../node.js/module.js');

// 모듈을 사용한다.
console.log('abs(-273) = %d', module.abs(-273));
console.log('circleArea(3) = %d', module.circleArea(3));