// (1 × N) + (2 × (N - 1)) + (3 × (N - 2)
function solution(number) {

    let answer = 0;
    for (let i = 1; i <= number; i++) {
        answer += i * (number - (i - 1));
        //console.log(answer);
    }
    return answer;
}


console.log(solution(10)); //220