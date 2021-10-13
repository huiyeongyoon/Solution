function solution(num) {

    const arr = []
    for (let i = 1; i <= num; i++) {
        if (i <= num) {
            arr.push(i);
        }
    }
    for (let i = num; i >= 1; i--) {
        if (i < num) {
            arr.push(i);
        }
    }

    console.log(arr);

}

solution(5);