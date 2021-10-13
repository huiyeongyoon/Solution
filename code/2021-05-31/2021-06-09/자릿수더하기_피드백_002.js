// 숫자로 푸는 법
function solution(n) {
    const result = String(n).split('');
    for (let i = 0; i < result.length; i++) {
        result[i] += Number(result[i]);
    }

    return result;
}

console.log(solution(123));
console.log(solution(987));
//다른방법으로