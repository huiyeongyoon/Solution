function getNumbers(a, b){
    let answer = 0;
    for (let i = 0; i <= a - b; i++) {
        answer += b + i;
    }
    return answer;
}

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return getNumbers(a, b)
}

function solution(a, b) {
    return a > b ? getNumbers(a, b) : swap(a, b) ;
}
console.log(solution(3,5));
console.log(solution(3,3));
console.log(solution(5,3));