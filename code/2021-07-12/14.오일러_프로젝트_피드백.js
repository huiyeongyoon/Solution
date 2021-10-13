function solution(number){
    let answer = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0) {
            answer += i;
            //console.log('3곱하기',answer,i)
        }
        if (i % 5 === 0) {
            answer += i;
            //console.log('5곱하기',answer,i)
        }
    }

    return answer;
}
console.log(solution(10)); //23