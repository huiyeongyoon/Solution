const odd = (s) => (s.length % 2 === 1) ? s[Math.trunc(s.length / 2)] : '';

// console.log(odd('abc')); // b
// console.log(odd('abcde')); // c

const even = (s) => (s.length % 2 === 0) ? s[Math.trunc(s.length / 2) - 1] + s[Math.trunc(s.length / 2)] : '';

// console.log(even('abcd')); // bc
// console.log(even('abcdef')); // cd

// const solution = (s) => {
//   return odd(s) + even(s);
// }

const solution = (s) => odd(s) + even(s);

console.log(solution("abcde"));
console.log(solution("qwer"));