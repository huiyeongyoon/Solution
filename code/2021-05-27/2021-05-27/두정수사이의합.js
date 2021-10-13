function solution(a, b) {
    let answer = 0;
    let temp = 0;
    if(a > b){
        temp = a;
        a = b;
        b = temp;
    }

    for (let i = a; i < b + 1; i++) {
        answer += i
    }

    return answer;
}

console.log(solution(3,5));
console.log(solution(3,3));
console.log(solution(5,3));