// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.


function solution(num) {
    let answer = 0;
    for (let i = 0; i < 500; i++) {
        if(num % 2 === 1){ //홀
            num = num * 3 + 1;
            answer +=1;
            if(num === 1) {
                break;
            }
        }

        if(num % 2 === 0){ //짝
            num = num / 2;
            answer +=1;
            if(num === 1) {
                break;
            }
        }
    }

    if(answer > 500 ) {
        answer = -1;
    }
    return answer;
}

console.log(solution(6)); //8
console.log(solution(16)); //4
console.log(solution(626331)); //-1