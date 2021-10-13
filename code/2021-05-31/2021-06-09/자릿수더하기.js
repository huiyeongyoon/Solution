function solution(n) {
    let arr = [];
    let result = String(n);
    let answer = 0;
    for (let i = 0; i < result.length; i++) {
        answer += result[i] * 1;
    }
    return answer;
}

console.log(solution(123));
console.log(solution(987));
//다른방법으로