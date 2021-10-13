function solution(num) {

    let answer = 0;
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            answer += i + j;
        }
    }
    console.log(answer);
}

solution(2); // 12