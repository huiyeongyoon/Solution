function solution(s) {
    let answer = '';
    let operator = (s.length % 2);
    if (operator === 1) {
        answer = s.charAt(s.length / 2);
    }
    if (operator === 0) {
        answer += s.charAt(s.length / 2 -1);
        answer += s.charAt(s.length / 2);
    }

    return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));