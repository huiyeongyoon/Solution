// 공백을 제외한 문자의 갯수는?
// 여기 나중에 물어봐야되
function emptySpace(letter) {
  if (letter === ' ') {
    return true; // 공백일때!!
  } else {
    return false; // 공백이 아닐때!!
  }
}
// console.log(emptySpace(' ')); // true

function solution(sentence) {
  let answer = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (emptySpace(sentence[i])) {
    } else {
      answer += 1;
    }

  }
  return answer;
}

console.log(solution('The next day the little prince came back')); //