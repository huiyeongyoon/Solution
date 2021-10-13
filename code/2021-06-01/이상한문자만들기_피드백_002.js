function solution(s) {
  var answer = '';
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
        for (let j = 0; j < lowerCase.length; j++) {
          if (str[i] === lowerCase[j]) {
            answer += upperCase[j];
          }
        }
      } else { // 짝수
        // 소문자
        for (let j = 0; j < lowerCase.length; j++) {
          if (str[i] === lowerCase[j]) {
            answer += lowerCase[j];
          }
        }
      }
    }
    answer += ' ';
  }

  return answer;
}

console.log(solution("try hello world "));