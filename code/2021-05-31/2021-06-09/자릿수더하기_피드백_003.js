// 숫자로 푸는 법
function solution(n) {
    let result = 0;

    while (n > 0) {
        // console.log(n);
        result += n % 10;
        n = Math.trunc(n / 10);
    }

    return result;
}

console.log(solution(123));
console.log(solution(987));
//다른방법으로