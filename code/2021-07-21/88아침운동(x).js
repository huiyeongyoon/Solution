// 7 운동장 길이
// 1 나무 위치 0 평지
// 가장 넓은데가 어디인지 어떻게 구별해?
function solution(groundLength, emptyGround) {

    let answer = 0;
    for (let i = 0; i < groundLength; i++) {
        if (emptyGround[i][0] === 0 && emptyGround[i][1] === 0) {
            answer += 2;
        }
    }
    console.log(answer);
}

console.log(solution(7,[[0,0], [1,0], [1,1], [0,0], [0,0], [0,0], [0,1]]));