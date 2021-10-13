function solution(s) {
    let answer = '';
    let result = s.length;
    let getNum = 0;

    for (let i = 0; i < result; i++) {
        result %= 2;
        if(result === 1) {
            getNum += s.length / 2 - 0.5;
            answer = s[getNum];
        }

        if(result === 0) {
            getNum += s.length / 2 - 1;
            answer = s[getNum];
            answer += s[getNum+1];
        }
    }

    return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));