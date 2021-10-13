function f1(c) { // 대문자
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let j = 0; j < lowerCase.length; j++) {
    if (c === lowerCase[j]) {
      return upperCase[j];
    }
    if (c === upperCase[j]) {
      return upperCase[j];
    }
  }

  return '';
}

function f2(c) { // 소문자
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let j = 0; j < lowerCase.length; j++) {
    if (c === lowerCase[j]) {
      return lowerCase[j];
    }
    if (c === upperCase[j]) {
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
  var answer = '';

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
        answer += f1(str[i]);
      } else { // 짝수
        // 소문자
        answer += f2(str[i]);
      }
    }
    answer += ' ';
  }

  return answer;
}

console.log(solution("try hello world "));