function odd(s) {
  if (s.length % 2 === 1) {
    return s[Math.trunc(s.length / 2)];
  }

  return '';
}

// console.log(odd('abc')); // b
// console.log(odd('abcde')); // c

function even(s) {
  const index = Math.trunc(s.length / 2);

  if (s.length % 2 === 0) {
    return s[index - 1] + s[index];
  }

  return '';
}

// console.log(even('abcd')); // bc
// console.log(even('abcdef')); // cd

function solution(s) {
  return odd(s) + even(s);
}

console.log(solution("abcde"));
console.log(solution("qwer"));