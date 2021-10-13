function solution(s){
  var answer = true;
  let y = 0;
  let p = 0;
  for (let i = 0; i < s.length; i++) {
    // if(s[i] === 'y' || 'Y') {
    if(s[i] === "y" || s[i] === "Y") {
      y += 1;
    }
    if(s[i] === 'p' || s[i] === 'P'){
      p += 1;
    }
    if(y === p) {
      answer = true;
    } else if (y !== p) {
      answer = false;
    } else {
      answer = true;
    }
  }

  return answer;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));