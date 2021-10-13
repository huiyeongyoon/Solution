//양의 정수 N이 주어지면 (N × 1) + (N × 2) + (N × 3) + … + (N × 99) + (N × 100)을 계산하는 프로그램을 작성하여라.

const solution = (number) => {
    let answer = 0;
    for (let i = 1; i < 101; i++) {
        answer += number * i;
    }
    return answer;
}

console.log(solution(2)); //10100