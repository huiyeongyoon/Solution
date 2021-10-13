//x 의 크기만큼 곱하여 n번수만큼 출력한다

function solution(n,x) {
    answer =[];
    for (let i = 1; i <= n; i++) {
        answer.push(i * x);
    }
    return answer;
}
    console.log(solution(5,2)); //[ 2, 4, 6, 8, 10 ]
