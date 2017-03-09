// 모듈을 생성할 때는 exports 객채를 사용한다.
// 아래의 코드 처럼 exports 객체에 속성이나 메서드를 지정한다.

// 절대값을 구하는 메서드
exports.abs = function (number) {
    if(0<number){
        return number;
    }else{
        return -number;
    }
};

// 원의 넓이를 구하는 메서드
exports.circleArea = function (radius) {
    return radius * radius * Math.PI;
}