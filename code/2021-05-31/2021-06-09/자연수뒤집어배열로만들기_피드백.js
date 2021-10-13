function solution(n) {
    const answer = [];

    while (n > 0) {
        // console.log(n);
        answer.push(n % 10);
        n = Math.trunc(n / 10);
    }

    return answer;
}

console.log(solution(12345));