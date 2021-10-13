// arr 배열에서 홀수만 출력하시오
const arr = [1, 3, 2, 4, 5, 8];
let result = 0;
let odd = "홀수 :";
let even = "짝수 :";
for (let i = 0; i < arr.length; i++) {
  result = arr[i]
  if(result % 2 === 1) { //소수점 존재 유무에 갈린다
    odd += result;
  } else {
    console.log( even + result);    //짝수 소수점 없을떄 짝수
  }
}
// console.log(odd);


// console.log(2 % 2); // 0
// console.log(4 % 2); // 0
// console.log(6 % 2); // 0

console.log(0 % 3); // 0
console.log(1 % 3); // 1
console.log(2 % 3); // 2
console.log(3 % 3); // 0
console.log(4 % 3); // 1
console.log(5 % 3); // 2
console.log(6 % 3); // 0


