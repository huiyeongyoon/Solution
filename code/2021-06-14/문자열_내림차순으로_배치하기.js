// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
//s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
//제한 사항
//str은 길이 1 이상인 문자열입니다.

function toArr(s, result){
    for (let i = 0; i < s.length; i++) {
        result.push(s[i]);
    }
    return result;
}

function compare(s, result) {
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j < s.length; j++) {
            if (result[i] < result[j]) {
                sorting(result, i ,j)
            }
        }
    }
    return result;
}

function sorting(result, i ,j) {
    return [result[i], result[j]] = [result[j], result[i]];
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
    toArr(s, result);
    compare(s, result);
    return toString(result);
}

console.log(solution("Zbcdefg")); //"gfedcbZ"
