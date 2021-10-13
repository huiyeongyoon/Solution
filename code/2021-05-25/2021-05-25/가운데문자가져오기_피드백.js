function solution(s) {
  let answer = '';
  const index = s.length / 2;
  const operator = s.length % 2;

  if (operator === 1) {
    answer = s.charAt(index);
  }

  if (operator === 0) {
    answer += s.charAt(index - 1);
    answer += s.charAt(index);
  }

  return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));