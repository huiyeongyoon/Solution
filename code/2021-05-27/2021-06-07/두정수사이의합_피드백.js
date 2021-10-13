function getNumbers(a, b){
    console.log('a',a);
    console.log('b',b);
    let answer = 0;
    for (let i = a; i <= b; i++) {
        answer += i;
    }
    return answer;
}

function solution(a, b) {
    return a < b ? getNumbers(a, b) : getNumbers(b, a) ;
}
console.log(solution(3,5));
console.log(solution(3,3));
console.log(solution(5,3));