// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.

function solution(s) {
    let answer = true;
    let numbers = '123456789';

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (s[i] !== numbers[i]) {
                return answer = false; //for문을 false되는순간 중지시킨다
            } else {
                answer = true;
            }
        }
    }

    return answer;
}

console.log(solution('a234')); //false
console.log(solution('1234')); //true;