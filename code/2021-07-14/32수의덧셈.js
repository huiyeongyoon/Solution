function solution(n) {
    const arr = [];
    const arr1 = [];
    let answer = 0;
    let b = '';
    n += '';
    for (let i = 0; i < 4; i++) {
        arr.push(n[i]);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(n[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        b += arr1[i];
    }

    answer = Number(n) + Number(b);
    return answer;

}

console.log(solution(9730)); // 10109