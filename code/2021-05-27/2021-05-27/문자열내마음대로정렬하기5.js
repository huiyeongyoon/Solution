function solution(strings, n) {
  var answer = [];
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    result += strings[i].charAt(n);
  }
  console.log(result);

  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      console.log(i, "i", result[i]);
      console.log(j, "j", result[j]);
      if(result[i] > result[j]){
        // console.log(result[i]);
        // console.log(result[j]);
        result = [result[j], result[i] = result[i], result[j]];
        console.log("result", result);
      }
    }
  }
  return result;
}

console.log(solution(["sun", "bed", "car"], 1))
//console.log(solution(["abce", "abcd", "cdx"], 2))
//console.log(solution(["abcd", "efgh", "ijk"], 2))