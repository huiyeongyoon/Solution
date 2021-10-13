//몇바퀴 돌지 몰라


function solution(length,a,b,c,d,e) {
    let accumulatedNum = 0;
    let answer = 0;
    for (let i = 2; i <= length; i++) {
        accumulatedNum += i - 1;
        answer = (i ** 2) + accumulatedNum;
        console.log(answer);
    }
}


console.log(solution(5,5,8,22,174,590));