// 다음 라운드 진출 조건
// 0점이면 안되
// k번째 참가자의 점수보다 크거나 같아야한다
// 참가자의 점수를 준다
// 다음라운드 참가할 참가자의 수는?

//                n       k
function solution(length, leastPassParticipant, participant) {
    let answer = 0;
    for (let i = 0; i < length; i++) {
        if (participant[leastPassParticipant] <= participant[i]
            && participant[i] !== 0) {
            answer += 1;
        }
    }

    return answer;
}

console.log(solution(8,5,[10, 9, 8, 7, 7, 7, 5, 5]));
console.log(solution(4,2,[0, 0, 0, 0]))
console.log(solution(4,2,[3, 2, 0, 0])) // 2