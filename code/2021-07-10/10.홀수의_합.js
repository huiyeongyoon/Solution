//3 + 5 + 7 + 9
function solution(a, b){
    let answer = 0;
    for (let i = a; i <= b; i++) {
        // 1 true
        // 0 false
        if (i % 2 === 1) {
            answer += i;
        }
    }

    return answer;

}

console.log(solution(3,9)); //24