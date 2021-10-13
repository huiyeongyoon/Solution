function f1(x) {
    let changeNum1 = x + '';
    let arr = [];
    let result1 = '';


    for (let i = 0; i < changeNum1.length; i++) {
        arr.push(changeNum1[i]);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        result1 += arr[i];
    }

    return Number(result1);
}

function solution(a,b) {
    const result1 = f1(a);
    const result2 = f1(b);
    console.log(result1, result2);

    if (result1 > result2) {
        console.log(result1);
    } else {
        console.log(result2);
    }
}
solution(734,893); //437
//solution(221,231); //132