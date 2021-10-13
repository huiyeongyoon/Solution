// n 짝수 n/2
// n 홀수 n*3+1
// 마지막은 1로끝남
function solution(num) {

    let answer = 0;
    for (let i = 0; i < 100; i++) {
        if (num === 1) {
            //console.log(num);
            break
        }
        if (num % 2 === 0 ) {
            num = num / 2
            //console.log('num1', num);
        } else {
            num = num * 3 +1
            //console.log('num2', num);
        }
        if (answer < num){
            answer = num;
        }
    }

    return answer;

}


//console.log(solution(1)); //1
console.log(solution(3)); //16