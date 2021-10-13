function countP(s){
  let p = 0;
  if(s === 'p' || s === 'P') {
    p = 1;
  }
  return p
}

function countY(s){
  let y = 0;
  if (s === 'y' || s === 'Y') {
    y = 1;
  }
  return y
}

function solution(s){
  let pNumber = 0;
  let yNumber = 0;
  let answer = true;
  for (let i = 0; i < s.length; i++) {
    pNumber = countP(s[i]);
    yNumber = countY(s[i]);

    if (pNumber === yNumber) {
      answer = true;
    } else if (pNumber !== yNumber) {
      answer = false;
    } else {
      answer = true;
    }

  }
  return answer;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));