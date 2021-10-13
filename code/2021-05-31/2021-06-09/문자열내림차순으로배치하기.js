function arr(s, result) {
    for (let i = 0; i < s.length; i++) {
        result.push(s[i]);
    }
    return result;
}

function sorting(s, result) {
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if(result[i] < result[j]) {
                [result[i],result[j]] = [result[j],result[i]];
            }
        }
    }
}

function toString(result) {
    let answer = '';
    for (let i = 0; i < result.length; i++) {
        answer += result[i];
    }
    return answer;
}

function solution(s) {
    let result = [];
    arr(s, result);
    sorting(s, result);
    return answer = toString(result);

}

console.log(solution("Zbcdefg")) //"gfedcbZ"