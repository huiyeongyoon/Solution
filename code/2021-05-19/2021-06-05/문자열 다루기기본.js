//인풋된 문자열과 문자열"1부터9까지를 비교한다"


function solution(s) {

  let letter = "123456789";
  let answer = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === letter[i] ) {
      answer = true;
    } else {
      answer = false;
    }
  }

  return answer;
}

console.log(solution("1234a")); // false
console.log(solution("1234")); // true