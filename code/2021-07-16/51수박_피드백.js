//나누면 두 결과값이 다 짝수여야됨 예 2/6 4/4
function solution(weight) {
    // 짝수냐 아니냐!
    const isEven = weight % 2 === 0;

    // 2는 나누었을때 짝수가 되지 않는다.
    // 그래서 weight가 2보다 큰 짝수여야 한다.
    if (isEven && weight > 2) {
        return 'YES'
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