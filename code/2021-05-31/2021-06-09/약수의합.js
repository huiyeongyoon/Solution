function solution(n) {
    var answer = 0;


    for (let i = 0; i <= n; i++) {
        if(n % i === 0) { //true가 되면 answr실행
            answer += i;
        }
    }

    return answer;
}

console.log(solution(12)); //28
console.log(solution(5));  //6