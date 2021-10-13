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
  return counter(s, 'p') === counter(s, 'y');
}

console.log(solution("pPoooyY"));
// console.log(solution("Pyy"));