function solution(arr) {
    let ascendingCount = 0;
    let descendingCount = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            ascendingCount += 1;
        }
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            descendingCount += 1;
        }
    }

    if (ascendingCount === arr.length - 1) {
        return 'ascending';
    } else if (descendingCount === arr.length - 1) {
        return 'descending';
    } else {
        return 'mixed';
    }
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(solution([8, 7, 6, 5, 4, 3, 2, 1]));
console.log(solution([8, 1, 7, 2, 6, 3, 5, 4]));