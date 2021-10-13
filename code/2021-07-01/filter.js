//자바스크립트의 filter 메서드는 조건을 주고 해당 조건이 참인 요소를 모아 새로운 배열로 반환하는 메서드이


// arr.filter(callback(element[, index[, array]])[, thisArg])
// callback : 각 요소에 대한 조건값
// element : 처리할 현재 요소
// index : 현재 인덱스
// array : filter를 호출한 배열
// thisArg : callback을 생행 할 때 this로 사용하는 값

const arr = [1,2,3,4,5,6]
const arr2 = arr.filter(n => n % 2 !== 0);

console.log(arr2);
