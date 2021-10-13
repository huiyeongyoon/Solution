// 문제 설명
// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
//
//     제한 조건
// s는 길이 1 이상인 문자열입니다.
//     s는 알파벳과 공백문자(" ")로 이루어져 있습니다.
//     첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )

// 띄워쓰기를 만난다면 단어로 취급해준다
// s의 첫글자는 대문자로 바꿔준다
// s의 첫글자가 숫자라면 위의 조건을 무시하고 넣어주고 그다음 글자에 대문자를 넣어준다
function solution(s) {
    let answer = '';
    let arr = [];
    let result = '';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const UpperCase= 'abcdefghijklmnopqrstuvwxyz'
    const number = '123456789';

    for (let i = 0; i < s.length; i++) {
        //숫자
        for (let j = 0; j < number.length; j++) {
            if (s[i] === number[j]) {
                answer += s[i];
            }
        }
        //알파벳

        for (let j = 0; j < lowerCase.length; j++) {
            if (s[i] === lowerCase[j]) {
                answer += s[i].toLowerCase();
            }
        }


    }

    return answer;
}

console.log(solution('3people unFollowed me')); //"3people Unfollowed Me"
//console.log(solution('for the last week')); //"For The Last Week"