//  123 * 45는 (1 * 4) + (1 * 5) + (2 * 4) + (2 * 5) + (3 * 4) + (3 * 5) = 54이다
function solution(frontNum, backNum) {
    let s1 = String(frontNum);
    let s2 = String(backNum);
    let answer = 0;
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            answer += Number(s1[i]) * Number(s2[j]);
        }

    }

    console.log(answer);
}

solution(123,45); // 54