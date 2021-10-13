function shiftCase(c, n, caseA, caseZ) {
  let answer = '';
  const alphabetLength = 26;
  n = n % alphabetLength;

  let charCode = c.charCodeAt(0);

  if (caseA <= charCode && charCode <= caseZ) {
    charCode += n;
    if (charCode > caseZ) {
      charCode = charCode - alphabetLength;
    }
    answer += String.fromCharCode(charCode);
  }

  return answer;
}

function shiftUpperCase(c, n) {
  let answer = shiftCase(c, n, 65, 90);

  return answer;
}

// console.log(shiftUpperCase("Z", 1)); // A
// console.log(shiftUpperCase("A", 1)); // B
// console.log(shiftUpperCase("A", 4)); // E
// console.log('|' + shiftUpperCase("a", 1) + '|'); // ''
// console.log('|' + shiftUpperCase(" ", 1) + '|'); // ''


function shiftLowerCase(c, n) {
  let answer = shiftCase(c, n, 97, 122);

  return answer;
}

// console.log(shiftLowerCase("z", 1)); // a
// console.log(shiftLowerCase("a", 1)); // b
// console.log(shiftLowerCase("a", 4)); // e
// console.log('|' + shiftLowerCase("A", 1) + '|'); // ''
// console.log('|' + shiftLowerCase(" ", 1) + '|'); // ''

function solution(s, n) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === ' ') {
      answer += ' ';
      continue;
    }
    answer += shiftLowerCase(char, n);
    answer += shiftUpperCase(char, n);
  }

  return answer;
}


// console.log(solution("abc", 1)); // bcd
// console.log(solution("ABC", 1)); // BCD
// console.log(solution("aBc", 1)); // bCd

console.log(solution("a B c", 1)); // b C d
