function solution(s) {
  let answer = 0;
  let number = 1000;
  let flag = false;
  let index = 0;

  if (s[0] === '-') {
    flag = true;
    index = 1;
  }

  for (let i = index; i < s.length; i++){
    answer += s[i] * number;
    number = number / 10;
  }

  //만약flag가 true면
  if (flag) {
    answer = answer * -1;
  }

  return answer;
}
console.log(solution("1234"));
console.log(solution("-1234"));