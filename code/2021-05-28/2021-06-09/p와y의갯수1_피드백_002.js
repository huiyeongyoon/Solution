function pCount(letter) {
  if(letter === 'p' || letter === 'P'){
    return 1;
  }
  return 0;
}

function yCount(letter) {
  if(letter === 'y' || letter === 'Y') {
    return 1;
  }
  return 0;
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