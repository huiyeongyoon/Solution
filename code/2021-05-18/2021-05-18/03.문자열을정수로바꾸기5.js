function solution(s) {
  let digit = 1000;
  let answer = 0;
  let flag = false;
  let index = 0;

  if (s[0] === '-') {
    flag = true;
    index = 1;
  }

  for (let i = index; i < s.length; i++) {
    answer += Number(s[i] * digit);
    digit = digit / 10;
  }

  if (flag) {
    answer = answer * -1;
  }

  return answer;
}

console.log(solution("1234"));
console.log(solution("-1234"));