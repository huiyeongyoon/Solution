// arr 배열에서 3의 갯수를 세시오.
function checkingNumber3(numbers, count) {
  if (numbers === 3) {
    count += 1;
  }
  return count;
}

function solution(arr){
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer = checkingNumber3(arr[i], answer);
  }
  return answer;
}

console.log(solution([1, 3, 2, 4, 5, 3, 2, 4, 5, 3, 2, 4, 5, 3, 2, 4, 5, 3, 2, 4, 5]));