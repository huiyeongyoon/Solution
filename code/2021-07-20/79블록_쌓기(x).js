// 블록 높이 같게
// 움직여야 하는 최소 블록의 개수 K를
function solution(n,floors) {

    let result = 0;
    let answer = 0;
    for (let i = 0; i < n; i++) {
        result += floors[i];
    }

    for (let i = 0; i < result / 6; i++) {
        if (floors[i] < result/6) {
            answer += 1;
        } else if (floors[i] > result / 6) {
            answer += 1;
        }
        console.log(floors[i]);
    }
    console.log(answer);
}

console.log(solution(6,[5,2,4,1,7,5])); // 5