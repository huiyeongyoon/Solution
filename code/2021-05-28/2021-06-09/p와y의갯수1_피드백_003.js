function count(letter, c) {
  if(letter === c || letter === c.toUpperCase()) {
    return 1;
  }

  return 0;
}

function solution(s){
  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    p += count(s[i], 'p');
    y += count(s[i], 'y');
  }
  return p === y; // 쌉가능!!!!
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));