// 앞부분부터 하나씩
// 같은색 못주움
// 다른색 주울려면 휴식

function solution(a,b) {

    let answer = -1;
    for (let i = 0; i < b.length; i++) {
        if (b[i] !== b[i+1]) {
            answer += 1;
        }
    }
    return answer;
}

console.log(solution(6,[1,0,0,1,1,1]));