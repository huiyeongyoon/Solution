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

  return answer;
}

console.log(solution("try hello world"));