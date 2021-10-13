function solution(s) {
  const str = "123456789";
  let flag = true;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if(s[i] === str[i]) {
        flag = true;
      } else{
        return flag = false;
      }
    }
  }
  return flag;
}


console.log(solution("2a34"));  //false
console.log(solution("12aa"));  //false
console.log(solution("1234"));  //true
// console.log(solution("1234"));  //true