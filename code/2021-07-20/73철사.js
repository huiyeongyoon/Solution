// 2 2 3 4 5 6 7
function solution(num) {
    let answer = 2;

    for (let i = 2; i <= num + 1 ; i++) {
        console.log(i);
        answer += i;
    }
    console.log(answer);
}

solution(6); // 29