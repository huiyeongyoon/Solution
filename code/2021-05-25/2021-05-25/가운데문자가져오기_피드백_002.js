function solution(s) {
  let answer = '';
  const index = Math.trunc(s.length / 2);
  // console.log('index', index);
  const operator = s.length % 2;

  if (operator === 1) {
    answer = s[index];
  }

  if (operator === 0) {
    answer = s[index - 1] + s[index];
  }

  return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));