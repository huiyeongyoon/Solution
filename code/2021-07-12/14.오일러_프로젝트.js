function solution(number){
    let answer = 0;
    for (let i = 0; i < number; i++) {
        if ( i * 3 < number) {
            answer += i * 3;
            //console.log('3곱하기',answer,i)
        }
        if ( i * 5 < number) {
            answer += i * 5;
            //console.log('5곱하기',answer,i)
        }
    }

    return answer;
}
console.log(solution(10)); //23