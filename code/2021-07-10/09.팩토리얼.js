
//1*2 2
//2*3 6
//6*4 24
//24*5 120
function solution(number) {
    let answer = 1;
    for (let i = 1; i <= number; i++) {
        answer = answer * i;
    }
    console.log(answer);
}

solution(5); //120