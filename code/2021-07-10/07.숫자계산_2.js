//양의 정수 N이 주어지면 1 + (2 × 2) + (3 × 3) + … + ((N - 1) × (N - 1)) + (N × N)을 계산하는 프로그램을 작성하여라.

const solution = (number) => {

    let answer = 0;
    for (let i = 1; i < number + 1; i++) {
        answer += i * i;
        //console.log(answer);
    }

    return answer;
}
console.log(solution(10)); //385