
function solution(s, n) {
  let answer = '';
  const alphabetLength = 26;
  const lowerCaseA = 97;
  const lowerCaseZ = 122;

  n = n % alphabetLength;

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);

    if (lowerCaseA <= charCode && charCode <= lowerCaseZ) { // 소문자
      charCode += n;
      if (charCode > lowerCaseZ) {
        charCode = charCode - alphabetLength;
      }
      answer += String.fromCharCode(charCode);
    }
  }
  return answer;
}

console.log(solution("z", 1)); // a
// console.log(solution("abc", 1)); // bcd
// console.log(solution("zdh", 4)); // dhl
