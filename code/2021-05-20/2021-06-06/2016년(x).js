//5/1 일요일

function solution(a, b) {
    answer = [];
    const arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = ["일","월","화","수","목","금","토"]
    let result = 0;
    for (let i = 0; i < a - 1; i++){
        result += arr[i]
    }
    result += b + 5; // 1월 1일을 금요일 부터 시작하기 위하여 대입 
    result = result % days.length; // 날짜 총합의 나머지연산자 7로 나눠서 요일을 변수에 담아준다

    answer.push(days[result]);


    return answer;
}
console.log(solution(5,24));
console.log(solution(1,8));

//1월 1일은 금요일이다
//12번 돈다 월이 바뀔대 요일은 누적된다