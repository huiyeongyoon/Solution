function solution(a, b) {

  let i, j;
  let result ='';

  for (i = 0; i < a; i++) {
    for (j = 0; j < b; j++) {
      result += '*';
    }
    result += '\n'; // 1.result에 \n사용해서 내려써서 누적한다
  }
  return result;  // 2.누적된 result값을 호출한 곳으로 돌려준다

}
console.log(solution(5,4));
