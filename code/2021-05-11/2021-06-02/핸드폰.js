//뒤에 4자리빼고*표시하기
function star(n) {
    let answer = "";
    for (let i = 0; i < n; i++) {
        answer += "*";
    }
    return answer;
}

function solution(phone_number,n) {
    let answer = "";

    for (let i = 0; i < phone_number.length - n; i++) {
        answer += phone_number[i];
    }

    answer += star(n);

    return answer;
}
console.log(solution("7105250212360",4));
