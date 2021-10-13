function canBeDivided(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

function sort(answer) {
  for (let i = 0; i < answer.length; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[i] > answer[j]) {
        [answer[i], answer[j]] = [answer[j], answer[i]];
      }
    }
  }
  return answer;
}

function addMinusOne(arr) {
  //배열이 비워져있으면
  if (arr.length === 0) {
    arr.push(-1);
  }
  return arr;
}

function solution(arr, divisor) {
  // let answer = canBeDivided(arr, divisor);
  // answer = sort(answer);
  // answer = addMinusOne(answer);
  // return answer;
  return addMinusOne(sort(canBeDivided(arr, divisor)));
}

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)); // [-1]
