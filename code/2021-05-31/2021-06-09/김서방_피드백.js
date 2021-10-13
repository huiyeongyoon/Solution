function lookFor(where) {
  for (let i = 0; i < where.length; i++) {
    if( where[i] === 'Kim') {
      return i;
    }
  }

  return -1;
}

function solution(seoul) {
  const answer = lookFor(seoul)
  return `김서방은 ${answer}에 있다`;
}

console.log(solution(["Jane", "Kim"]));