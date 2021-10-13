function solution(a, b) {
    let answer = '';
    const daysAlphabet = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    //let daysAlphabet = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    const arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = 0;
    for (let i = 0; i < a-1; i++) { //a번 반복

        days += arr[i];
    }
    days += b+5;

    answer = daysAlphabet[days % daysAlphabet.length];

    return answer;

}

console.log(solution(5,24));
console.log(solution(1,1));

//1월 1일은 금요일이다
//12번 돈다 월이 바뀔대 요일은 누적된다