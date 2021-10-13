// 함수 선언
// 함수를 plus라는 이름으로 선언한다
function plus(a, b) {

    return a + b;
}

// 함수 표현식
// 함수를 subtract라는 변수에 할당한다
const subtract = function (a, b) {

    return a - b;
}

//        함수 호출(실행)
const p = plus(1, 3);
console.log(p); // 4

//        함수 호출(실행)
const s = subtract(5, 2);
console.log(s); // 3

setTimeout(function () {
    console.log('1초 후에 실행되는 익명함수');
}, 1000);