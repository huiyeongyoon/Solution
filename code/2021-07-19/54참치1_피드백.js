// 잡은 참치 4마리
// 측정차이가 2이하면 무거운 참치로 계산
// 3이상이면 4와 7로 계산

function solution(n, x, arr) {
    const compare = [];

    for (let i = 0; i < n; i++) {
        const a = arr[i][0];
        const b = arr[i][1];

        if (Math.abs(a - b) <= x) {
            if (a > b) {
                compare.push(a);
            } else {
                compare.push(b);
            }
        } else {
            i += 1;
            n += 1;
            compare.push(arr[i]);
        }
    }
    // console.log(compare);

    let sum = 0;
    for (let i = 0; i < compare.length; i++) {
        sum += compare[i];
    }
    console.log(sum);
}

solution(4, 2, [[3, 5], [2, 8], 4, [6, 5], [6, 3], 7]); // 22