// 1부터 n까지의 정수를 출력하시오.
// 3의 배수일 때 'X'로 출력하시오.
function addX(inputNumber, result) {
    if(inputNumber % 3 === 0) {
        return result + "X";
    } else {
        return result + inputNumber
    }
}

function solution(n){
    let answer = "";
    for (let i = 1; i <= n; i++) {
        answer = addX(i, answer);
    }
    return answer;
}


console.log(solution(20));