function solution(s) {
  var answer = [];
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = [];
  let count = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < lowerCase.length; j++) {
      if(s[i] === lowerCase[j]) {
        count += s[i];
      }
    }
    if(s[i] === " "){
      result.push(count);
      count = "";
    }
  }
  console.log(result);

  //return answer;
}

console.log(solution("try hello world "));