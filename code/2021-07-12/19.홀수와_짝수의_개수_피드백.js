
function solution(a, arr) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < a; i++) {
        if (arr[i] % 2 === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }

    // console.log(even);
    // console.log(odd);
    return [even, odd];
}

//3/7
const result = solution(10, [7, 15, 33, 999, 455, 464, 899, 566, 10, 5]);
// for (let i = 0; i < result.length; i++) {
//     console.log(result[i]);
// }

console.log(result);
// console.log(result[1]);