function solution(length, arr) {
    for (let i = 0; i < length; i++) {
        const n = arr[i];

        let x = 0;
        let flag = false;
        for (let j = 1; j <= n; j++) {
            if (j ** 2 + x === n) {
                flag = true;
                break;
            }
            x += j;
        }

        if (flag) {
            console.log(n, 'Y');
        } else {
            console.log(n, 'N');
        }
    }
}


solution(5, [5, 8, 22, 174, 590]);