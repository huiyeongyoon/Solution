function toUpperCase(c) { // 대문자
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let j = 0; j < lowerCase.length; j++) {
    if (c === lowerCase[j] || c === upperCase[j]) {
      return upperCase[j];
    }
  }

  return '';
}

function toLowerCase(c) { // 소문자
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let j = 0; j < lowerCase.length; j++) {
    if (c === lowerCase[j] || c === upperCase[j]) {
      return lowerCase[j];
    }
  }

  return '';
}

f1('a'); // 'A'
f1('A'); // 'A'
f2('a'); // 'a'
f2('A'); // 'a'

function solution(s) {
  let answer = '';

  let result = [];
  let temp = '';
  for (let i = 0; i < s.length; i++) {
    if(s[i] === " "){
      result.push(temp);
      temp = "";
    } else {
      temp += s[i];
    }
  }

  if (temp.length !== 0) {
    result.push(temp);
  }
  console.log(result);

  for (let i = 0; i < result.length; i++) {
    const str = result[i];
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) { // 홀수
        // 대문자
        answer += toUpperCase(str[i]);
      } else { // 짝수
        // 소문자
        answer += toLowerCase(str[i]);
      }
    }
    answer += ' ';
  }

  return answer;
}

console.log(solution("try hello world "));