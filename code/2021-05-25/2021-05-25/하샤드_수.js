function solution(x) {
    let answer = true;
    let result = 0;
    for (let i = 0; i < x.length; i++) {

        result += Number(x[i]);
    }
    //console.log(x);
    //console.log(result);
    result = x / result;

    //console.log(result);
    if(result % 1 === 0 ) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}

console.log(solution("10")); //true
console.log(solution("12")); //true
console.log(solution("11")); //false
console.log(solution("13")); //false