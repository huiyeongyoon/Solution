//인풋된 문자열과 문자열"1부터9까지를 비교한다"


function solution(s) {
  let answer = false;
  const number = "1234567890";

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < number.length; j++) {
      if (s[i] === number[i]) {
        answer = true;
      } else {
        answer = false;
      }
    }
  }

  return answer;
}

console.log(solution("1234a")); // false
console.log(solution("1234")); // true