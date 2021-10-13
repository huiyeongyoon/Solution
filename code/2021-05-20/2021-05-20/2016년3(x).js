function solution(a, b) {
    let answer = '';
    let daysAlphabet = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = '';
    for (let i = 0; i < a; i++) { //a번 반복
        for (let j = 0; j < b; j++) {
            days = b % daysAlphabet.length;
            console.log(daysAlphabet[days+4]);
            if (arr[a] === 29) {
                break;
            } else if (arr[a] === 30) {
                break;
            } else if (arr[a] === 31) {
                break;
            }


        // answer = daysAlphabet[k];
        }
    }
   // return answer;

}

console.log(solution(1,2));

//1월 1일은 금요일이다
//12번 돈다 월이 바뀔대 요일은 누적된다