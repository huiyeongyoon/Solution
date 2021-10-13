// 1 2 3 4  5  6 짜른횟수
// 2 2 3 3  4  4 증가값
// 2 4 6 9 12 16 종이조각합

function solution(cutting) {

    let answer = 0;
    for (let i = 0; i < cutting; i+=2) {
        // console.log(i);
        answer += i + 2;
    }
    console.log(answer);
}

solution(1);
solution(3);
solution(5);