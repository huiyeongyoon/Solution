function arr(s) {
    const result = [];
    for (let i = 0; i < s.length; i++) {
        result.push(s[i]);
    }
    return result;
}

function sorting(result) {
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if(result[i] < result[j]) {
                [result[i],result[j]] = [result[j],result[i]];
            }
        }
    }
    return result;
}

function toString(result) {
    let answer = '';
    for (let i = 0; i < result.length; i++) {
        answer += result[i];
    }
    return answer;
}

function solution(s) {
    let result = arr(s);
    result = sorting(result);
    return toString(result);

}

console.log(solution("Zbcdefg")) //"gfedcbZ"