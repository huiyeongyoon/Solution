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
  let pp = 0;
  let yy = 0;
  for (let i = 0; i < s.length; i++) {
    let p = pCount(s[i]);
    let y = yCount(s[i]);
    pp += p;
    yy += y;
  }
  return pp === yy; //이거 왜 가능?
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));