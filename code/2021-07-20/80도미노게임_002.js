function solution(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            console.log(i,'i',j,'j')
            count += i + j
        }
    }
    console.log(count);
}

solution(2);