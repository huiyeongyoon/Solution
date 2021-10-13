function solution(n) {
  let result = "";
  for(let i = 0; i < n; i++){
    if(i % 2) {
      result += "박" //0이면  false
    } else{
      result += "수"
    }
  }
  return result;
}
console.log(solution(1)); // 수
console.log(solution(2)); // 수박
console.log(solution(3)); // 수박수
console.log(solution(4)); // 수박수박
console.log(solution(5)); // 수박수박수

// 숫자가 입력된다
// 홀수이면 수가 출력된다 (13579)
// 짝수이면 박이 출력된다 (246810)

