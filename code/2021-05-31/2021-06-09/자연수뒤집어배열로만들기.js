function solution(n) {
    let answer = [];
    let a = String(n);
    for (let i = a.length - 1; i >= 0; i--) {
        answer.push(a[i]);
    }
    return answer;
}

console.log(solution(12345));