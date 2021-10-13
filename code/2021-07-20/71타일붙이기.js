// 0  1  2  3 4
// 빨 파 빨 파 빨
// 1 3 5 7 9
function solution(num) {

    let red = 0;
    let blue = 0;
    let arr = [];
    let total = 0;
    for (let i = 1;  i < num; i += 2) {
        arr.push(i);
    }

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
        if (total > num) {
            break;
        }

        if (i === 0 || i % 2 === 0) {
            red += arr[i]
        } else {
            blue += arr[i]
        }
    }

    return red-blue;
}

console.log(solution(25)); // 5