function solution(s) {
  const numbers = "123456789";

  for (let i = 0; i < s.length; i++) { // 2 a 3 4
    let flag = false;

    for (let j = 0; j < numbers.length; j++) {
      if (s[i] === numbers[j]) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      return false;
    }
  }

  return true;
}

console.log(solution("2a34"));  //false
console.log(solution("12aa"));  //false
console.log(solution("1234"));  //true
// console.log(solution("1234"));  //true