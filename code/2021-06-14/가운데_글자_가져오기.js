// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
// 제한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
function odd(s){
    let letter = 0;
    let answer ='';
    if (s.length % 2 === 1) {
        letter = s.length / 2 - 0.5;
        return answer = s[letter];
    }
    return '';
}
function even(s){
    let letter = 0;
    let answer = '';
    if(s.length % 2 === 0){
        letter = s.length / 2 - 1;
        answer = s[letter];
        return answer += s[letter + 1];
    }
    return '';
}

function solution(s) {
    let answer = '';
    answer = odd(s);
    answer += even(s);

    return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));