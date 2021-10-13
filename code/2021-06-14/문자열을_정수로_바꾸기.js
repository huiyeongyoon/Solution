// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
//
// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.

function solution(s) {
    let answer = 0;
    let number = 1000;
    let flag = false;
    let index = 0;

    //마이너스일때 i값 변경
    //index값 변경하여 -일때 문자열에 2번째수에서 시작하게 만듬
    if (s[0] === '-') {
        flag = true;
        index = 1;
    }

    //숫자를 문자열에 곱해서 숫자형으로 변환
    //이후에 number를 10으로 나눠 자릿수 변경
    for (let i = index; i < s.length; i++){
        answer += s[i] * number;
        number = number / 10;
    }

    // answer에 -1을 곱하여 음수로 바꿔줌..
    if (flag) {
        answer = answer * -1;
    }

    return answer;
}

console.log(solution('1234'));
//console.log(solution('-1234'));