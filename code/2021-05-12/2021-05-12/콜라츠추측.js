// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

function solution(num) {
    let answer = -1;
    for(let i = 0; i < 500; i++) {
        if( num === 1){
            answer = i; // 0 1 2 3 4 5 6 7
            break;
        }
        if(num % 2){
            //console.log("홀수", num * 3 + 1);
            num = num * 3 + 1;
        } else{
            //console.log("짝수", num / 2);
            num = Math.trunc(num / 2);
        }

    }
    return answer;
}
    console.log(solution(16))