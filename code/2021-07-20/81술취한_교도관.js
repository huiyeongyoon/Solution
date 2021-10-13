function solution(num) {

    let answer = 0;
    for (let i = 1; i <= num; i++) {
        if (i ** 2 <= num) {
            answer +=1;
        }
    }
    console.log(answer);
}

solution(5); // 2
solution(10000); // 100

