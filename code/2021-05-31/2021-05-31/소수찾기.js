//6:01

function solution(n) {
    var answer = 0;
    for (let i = 2; i <= n; i++) {
        if ( n % i === 0 && n % n === 0 ) {

            console.log(i);
        }
    }

    return answer;
}

console.log(solution(10));
//console.log(solution(4));