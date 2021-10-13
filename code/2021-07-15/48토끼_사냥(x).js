function solution(x,y) {
    const arr = [];
    for (let i = 0; i <= x; i++) {
        arr.push(i);
    }

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if (arr[i] / 24) {
                console.log(arr[i]);
            }
        }
    }
}

console.log(solution(24,2));