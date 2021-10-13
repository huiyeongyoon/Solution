function solution(n) {
    const answer = [];

    const s = String(n);

    for (let i = 0; i < s.length; i++) {
        answer.push(s[i]);
    }

    const result = [];
    let len = answer.length - 1;
    for (let i = 0; i < answer.length; i++) {
        result[i] = answer[len - i];
    }

    return result;
}

console.log(solution(12345));
console.log(solution(12435));