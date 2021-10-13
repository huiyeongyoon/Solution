function solution(a,b) {

    let changeNum1 = a + '';
    let changeNum2 = b + '';
    let arr1 = [];
    let arr2 = [];
    let result1 = '';
    let result2 = '';
    for (let i = 0; i < changeNum1.length; i++) {
        arr1.push(changeNum1[i]);
    }

    for (let i = 0; i < changeNum2.length; i++) {
        arr2.push(changeNum2[i]);
    }

    for (let i = arr1.length - 1; i >= 0; i--) {
        result1 += arr1[i];
    }

    for (let i = arr2.length - 1; i >= 0; i--) {
        result2 += arr2[i];
    }

    if (Number(result1) > Number(result2)) {
        console.log(Number(result1));
    } else {
        console.log(Number(result2));
    }
}


solution(734,83); //437
//solution(221,231); //132
