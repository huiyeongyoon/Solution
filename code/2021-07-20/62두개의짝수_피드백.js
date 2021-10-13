function solution(n) {
    let count = 0;

    for (let i = 2; i < n; i += 2) {
        for (let j = i; j < n; j += 2) {
            if (i * j <= n) {
                // console.log(i * j);
                count += 1;
            }
        }
    }

    console.log(count);
}

solution(10); // 2
solution(12); // 3