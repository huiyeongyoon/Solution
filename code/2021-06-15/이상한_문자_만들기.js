// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
//
// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

function upperCase(str, j) {
    let upperCaseVariable = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseVariable = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < lowerCaseVariable.length; i++) {
        if (str[j] === lowerCaseVariable[i]) {
            return upperCaseVariable[i];
        }
    }
}

function lowerCase(str, j) {
    let lowerCaseVariable = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < lowerCaseVariable.length; i++) {
        if (str[j] === lowerCaseVariable[i]) {
            return lowerCaseVariable[i];
        }
    }
}

function solution(s) {
    let answer = '';
    let answer1 = [];
    let temp = [];
    let result = [];
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' '){
            temp.push(result);
            result = '';
        } else {
            result += s[i];
        }
    }
    temp.push(result);
    //console.log(temp); [ 'try', 'hello', 'world' ]
    for (let i = 0; i < temp.length; i++) {
        str = temp[i];
        answer = '';
        //console.log(str); //try hello world
        for (let j = 0; j < str.length; j++) {
            //홀수
            if (j % 2 === 0 ){
                answer += upperCase(str, j);
            }
            //짝수
            if (j % 2 === 1 ){
                answer += lowerCase(str, j);

            }
        }
        answer1.push(answer);
    }
    return answer1;
}

console.log(solution("try hello world"));
//console.log(solution("try"));