console.log('filename : ', __filename);
console.log('dirname : ', __dirname);
console.log('output : %d', 273);
// 매개변수가 남을시 뒤에 이어서 출력
console.log('output : %d + %d = %d', 273, 52, 273+52, 52273);
//매개변수가 개수가 부족할 시 뒤에 %d 출력
console.log('output : %d + %d = %d & %d', 273, 52, 273+52);

console.log('숫자 : %d + %d = %d', 273, 52, 273+52);
console.log('문자열 : %s', 'Hello World!!', '특수 문자에 상관 없이 출력됨');
console.log('JSON : %j', {"name" : 'C8Mook'});

// 시간 측정
console.time('alpha');

var output = 1;
for(var i = 1; i <= 10; i++){
    output *= i;
}
console.log('Result : ', output);

console.timeEnd('alpha'); 
