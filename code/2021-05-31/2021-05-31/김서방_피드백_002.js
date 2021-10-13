function solution(seoul) {
  var answer = '';
  for (let i = 0; i < seoul.length; i++) {
    if("Kim" === seoul[i] ){
      answer = i;
    }
  }
  return `김서방은 ${answer}에 있다`;
}

console.log(solution(["Jane", "Kim"]));