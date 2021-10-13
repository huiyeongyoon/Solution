function solution(a,b) {

  let i, j;
  let result = '';

  for (i = 0; i < b; i++) {
    result = '';
    for (j = 0; j < a; j++) {
      result += '*';
    }
    console.log(result); //별5개 누적하고 console찍는다
  }
}
console.log(solution(4,5))


//이렇게하면 return을 안한다