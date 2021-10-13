//나누면 두 결과값이 다 짝수여야됨 예 2/6 4/4
function solution(weight) {
    // console.log();
    for (let i = 0; i < weight; i++) {
        // console.log(i, weight % i, weight % i === 0, i !== 1);
        if (weight % i === 0 && i !== 1) {
        // if (weight % i === 0) {
            return 'YES';
        }
    }
    return 'NO';
}

console.log(0, solution(0)); // NO
console.log(1, solution(1)); // NO
console.log(2, solution(2)); // NO
console.log(3, solution(3)); // NO
console.log(4, solution(4)); // YES
console.log(5, solution(5)); // NO
console.log(6, solution(6)); // YES
console.log(7, solution(7)); // NO
console.log(8, solution(8)); // YES