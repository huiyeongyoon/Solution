function solution(s) {
    let answer = '';
    let operator = (s.length % 2);
    if (operator === 1) {
        answer = s.charAt(s.length / 2);
    }
    if (operator === 0) {
        for (let i = 0; i < 2; i++) {
        answer =  s.charAt(s.length/2);
        }
    }

    return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));