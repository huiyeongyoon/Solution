function arr(s) {
    const result = [];
    for (let i = 0; i < s.length; i++) {
        result.push(s[i]);
    }
    return result;
}

function sorting(result) {
    // 원본 훼손을 방지하기 위해서 answer로 result를 복사한다
    const answer = [];
    for (let i = 0; i < result.length; i++) {
        answer.push(result[i]);
    }

    for (let i = 0; i < answer.length; i++) {
        for (let j = i + 1; j < answer.length; j++) {
            if(answer[i] < answer[j]) {
                [answer[i],answer[j]] = [answer[j],answer[i]];
            }
        }
    }
    return answer;
}

function toString(result) {
    let answer = '';
    for (let i = 0; i < result.length; i++) {
        answer += result[i];
    }
    return answer;
}

function solution(s) {
    // console.log(s.split(''));
    // console.log(s.split('').reverse());
    // console.log(s.split('').reverse().join(''));
    return s.split('').reverse().join('');
}

console.log(solution("Zbcdefg")) //"gfedcbZ"