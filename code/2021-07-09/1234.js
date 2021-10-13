// 이 함수는 수정하지 마세요.
function random(end) {
    return Math.trunc(Math.random() * end);
}
// console.log(random(10)); //  0 ~ 9


function solution(n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    for (let i = 0; i < n; i++) {
        answer += alphabet[random(n)];

    }
    return answer;
}

// 무작위로 나오는 값이기 때문에 실행결과가 다를 수 있음
console.log(solution(3)); // 'mba'
console.log(solution(5)); // 'nwghp'
