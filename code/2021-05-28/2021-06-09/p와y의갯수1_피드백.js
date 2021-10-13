function pCount(letter) {
  let p = 0;
  if(letter === 'p' || letter === 'P'){
    p = 1;
  }
  return p;
}

function yCount(letter) {
  let y = 0;
  if(letter === 'y' || letter === 'Y') {
    y += 1;
  }
  return y;
}

function solution(s){
  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    p += pCount(s[i]);
    y += yCount(s[i]);
  }
  return p === y; // 쌉가능!!!!
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));