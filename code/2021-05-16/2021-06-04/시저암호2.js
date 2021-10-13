// 공백
// 소문자, 대문자
// - n만큼 밀어준다
// - 밀어준 값이 case의 lnegth를 넘어가면 처음부터 시작한다

// 소문자
function toLowerCase(letter, n) {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const len = lowerCase.length;
  let result = '';

  for (let j = 0; j < len; j++) {
    if (letter === lowerCase[j]) {
      const temp = n + j;
      const index = temp >= len ? temp % len : temp;
      result += lowerCase[index];
    }
  }

  return result;
}
// 대문자
function toUpperCase(letter, n){
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const len = upperCase.length;
  let result = '';

  for (let j = 0; j < len; j++) {
    if (letter === upperCase[j]) {
      const temp = n + j;
      const index = temp >= len ? temp % len : temp;
      return result += upperCase[index];
    }
  }

  return result;
}
//공백
function emptySpace(letter, n) {
  let result = '';

  if (letter === ' ') {
    result += ' ';
  }

  return result;
}
function solution(s, n) {

  let result = '';
  for (let i = 0; i < s.length; i++) {
    result += emptySpace(s[i], n);
    result += toLowerCase(s[i], n);
    result += toUpperCase(s[i], n);
  }

  return result;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));

// s       n   result
// "AB"       1   "BC"
// "z"       1   "a"
// "a B z"   4   "e F d"