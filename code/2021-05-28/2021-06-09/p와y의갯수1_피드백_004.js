function counter(s, c) {
  s = s.toLowerCase();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      count += 1;
    }
  }

  return count;
}

function solution(s){
  const p = counter(s, 'p');
  const y = counter(s, 'y');

  return p === y; // 쌉가능!!!!
}

console.log(solution("pPoooyY"));
// console.log(solution("Pyy"));