function add(x, number) {
    let result = x + "";
    for (let i = 0; i < result.length; i++) {
        number += Number(result[i]);
    }
    return number;
}

function divide(x, number) {

    if (x % number === 0) {
        return answer = true;
    } else {
        return answer = false;
    }
}

function solution(x) {
    let number = 0;
    number = add(x, number);
    answer = divide(x, number);

return answer;
}

console.log(solution(10)); //true
console.log(solution(12)); //true
console.log(solution(11)); //false
console.log(solution(13)); //false