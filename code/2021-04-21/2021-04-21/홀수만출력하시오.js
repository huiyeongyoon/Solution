// arr 배열에서 홀수만 출력하시오
const arr = [1, 3, 2, 4, 5, 8];
let result = 0;
let odd = "홀수 :";
let even = "짝수 :";
for (let i = 0; i < arr.length; i++) {
  result = arr[i]
  //result = result + 1   i가0일때 result는 1
  //result = result + 3   i가1일때 result는 4
  //result = result + 2   i가2일때 result는 6
  //result = result + 4   i가3일때 result는 10
  //result = result + 5   i가4일때 result는 15
//result = arr[5]   //i가5일때 result는 8 (누적안함)
//console.log(result);
  if(result % 2 === 1) { //소수점 존재 유무에 갈린다
    odd += result  //문자열이 되버리네??
  } else {
    console.log( even + result);    //짝수 소수점 없을떄 짝수
  }
}
console.log(odd);     //홀수 소수점 존재할떄 홀수
//홀수: 1 3 5
//짝수: 2 4 8 이런식으로는 어떻게 출력하지?