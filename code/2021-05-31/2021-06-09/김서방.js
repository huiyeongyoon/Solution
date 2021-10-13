function lookFor(where) {
  let answer = 0;
  for (let i = 0; i < where.length; i++) {
    if( where[i] === 'Kim') {
      return answer = i;
    }
  }
  return '';
}
function solution(seoul) {
  answer = lookFor(seoul)
  return `김서방은 ${answer}에 있다`;

}

console.log(solution(["Jane", "Kim"]));