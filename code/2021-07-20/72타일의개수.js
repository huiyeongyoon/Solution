// 4 8 12
// 1 5 13 25
function solution(num) {

    let answer = 1;
    for (let i = 1; i < num; i++) {
        answer += 4 * i
    }
    console.log(answer);
}

solution(2) // 5
solution(4) // 25