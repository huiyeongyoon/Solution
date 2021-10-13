const str = 'hello';

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let result = '';

for (let i = 0; i < str.length; i++) {
  if (i % 2 === 0) { // 홀수
    // 대문자
    for (let j = 0; j < lowerCase.length; j++) {
      if (str[i] === lowerCase[j]) {
        result += uppercase[j];
      }
    }
  } else { // 짝수
    // 소문자
    for (let j = 0; j < lowerCase.length; j++) {
      if (str[i] === lowerCase[j]) {
        result += lowerCase[j];
      }
    }
  }
}

console.log(result);