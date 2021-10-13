function solution(n) {
    const answer = [];

    const s = String(n);

    for (let i = 0; i < s.length; i++) {
        answer.push(s[i]);
    }

    const result = [];
    for (let i = answer.length - 1; i > -1; i--) {
        result.push(answer[i]);
    }

    return result;
}

console.log(solution(12345));