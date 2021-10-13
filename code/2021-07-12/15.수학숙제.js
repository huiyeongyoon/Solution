function solution(num){

    let answer = 1;
    for (let i = 1; i < num; i++) {
        answer += answer * (num - i);
    }
    return answer;
}
console.log(solution(5));  //120