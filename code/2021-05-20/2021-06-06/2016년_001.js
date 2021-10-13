function solution(a, b) {
  let answer = '';
  let arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  let result = 0;
  for (let i = 0; i < a - 1; i++) { //a번 반복
    result += arr[i];
  }
  result += b + 5;

  for (let i = 0; i < result; i++) {
    answer = days[i % days.length];
  }
  return answer;

}

console.log(solution(5,24));
console.log(solution(1,8));

//1월 1일은 금요일이다
//12번 돈다 월이 바뀔대 요일은 누적된다