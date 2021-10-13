function solution(options, arr) {
    let answer = 0;

    let x = 0;
    for (let i = 0; i < options; i++) {
        console.log(arr[i]);
        const a = arr[i][0];
        const b = arr[i][1] - x;
        x = arr[i][1];

        answer += a * b;
    }

    console.log(answer);
}

solution(3, [[20, 2], [30, 6], [10, 7]]); // 170
solution(2, [[60, 1], [30, 5]]); // 180