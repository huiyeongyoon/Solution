function add(x) {
    let number = 0;
    let result = String(x);
    for (let i = 0; i < result.length; i++) {
        number += Number(result[i]);
    }

    return number;
}

function divide(x, number) {
    if (x % number === 0) {
        return true;
    } else {
        return false;
    }
}

function solution(x) {
    const number = add(x);

    return divide(x, number);
}

console.log(solution(10)); //true
console.log(solution(12)); //true
console.log(solution(11)); //false
console.log(solution(13)); //false