// 1 6 12 18
function solution(num){
    let answer = 1;
    for (let i = 0; i < num; i++) {
        answer += i * 6;
    }
    console.log(answer);

}

solution(2);
solution(4);