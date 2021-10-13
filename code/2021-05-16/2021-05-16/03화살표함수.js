// 인자가 하나도 없을때
const fn1 = () => console.log('화살표 함수');

// 인자가 하나만 있을때
const fn2 = x => console.log(x);
const fn3 = (x) => console.log(x);

// 인자가 2개 이상일때
const fn4 = (x, y) => console.log(x, y);

const fn5 = (x, y) => {
    console.log(x, y);
}


setTimeout(() => console.log('1초 후에 실행되는 익명함수'), 1000);