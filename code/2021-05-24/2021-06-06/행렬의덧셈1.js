function solution(arr1, arr2) {

  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr2.length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}
console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]));