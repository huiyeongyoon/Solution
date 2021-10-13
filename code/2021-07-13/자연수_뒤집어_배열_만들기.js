function solution(n) {
    var answer = [];

    n += "";
    for (let i = n.length; i > 0; i--) {
        answer.push(i);
    }
    return answer;
}


console.log(solution(12345))