function solution(n)
{
    var answer = 0;
    n += "";
    for (let i = 0; i < n.length; i++) {
        answer += Number(n[i]);
    }

    return answer;
}

console.log(solution(123));
console.log(solution(987));
//다른방법으로