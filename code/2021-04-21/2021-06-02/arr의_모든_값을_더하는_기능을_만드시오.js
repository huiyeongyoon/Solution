// arr의 모든 값을 더하는 기능을 만드시오.
function solution(arr){
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}

console.log(solution([1, 3, 2, 4, 5, 3, 2]));


