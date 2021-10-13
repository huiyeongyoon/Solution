function solution(num) {
  let answer = '';

  if(num % 2 === 1){
    answer = 'odd';
  } else {
    answer = 'even';
  }

  return answer;
}

console.log(solution(3)); // 'Odd'
console.log(solution(4));