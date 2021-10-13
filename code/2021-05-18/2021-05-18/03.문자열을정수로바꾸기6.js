function solution(s) {
  let digit = 1000;
  let answer = 0;
  let index = 0;

  // -일대 문자열 1부터 시작한다
  if (s[0] === '-') {
    index = 1;
  }

  for (let i = index; i < s.length; i++) {
    answer += Number(s[i] * digit);
    digit = digit / 10;
  }

  //음수로 만들어준다
  if (s[0] === '-') {
    answer = answer * -1;
  }
  return answer;
}

console.log(solution("1234"));
console.log(solution("-1234"));