//65 90 대문자
//97 122 소문자
//if문으로 한문제
//else if로 한문제
function solution(s, n) {
  n = n % 26;

  let answer = '';
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    // console.log('charCode', charCode);

    if (65 <= charCode && charCode <= 90) { // 대문자
      if (charCode + n > 90) {
        charCode = charCode + n - 26;
      } else {
        charCode += n;
      }
      answer += String.fromCharCode([charCode]);
    } else if (97 <= charCode && charCode <= 122) { // 소문자
      if (charCode + n > 122) {
        charCode = charCode + n - 26;
      } else {
        charCode += n;
      }
      answer += String.fromCharCode([charCode]);
    } else if (s[i] === ' ') {
      answer += " ";
    }
  }
  return answer;
}

// console.log(solution("A B", 1));
console.log(solution("z", 1));
console.log(solution("Z", 1));
console.log(solution("Z", 2)); // B
console.log(solution("a B z", 4)); // e F d

// s       n   result
// "AB"       1   "BC"
// "z"       1   "a"
// "a B z"   4   "e F d"