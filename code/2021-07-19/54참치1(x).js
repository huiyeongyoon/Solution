// 잡은 참치 4마리
// 측정차이가 2이하면 무거운 참치로 계산
// 3이상이면 4와 7로 계산

function solution(n, x, arr) {
    const compare = [];
    for (let i = 0; i < arr.length; i++) {

        compare.push(arr[i][0] - arr[i][1])

    }
    console.log(compare);
}

solution(4, 2, [[3, 5], [2, 8], 4, [6, 5], [6, 3], 7]); // 22