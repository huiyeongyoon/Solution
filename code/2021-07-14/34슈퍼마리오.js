function solution(score) {

    let totalScore = 0;
    const arr = [];
    let a = 0;
    let b = 0;
    for (let i = 0; i < score.length; i++) {
        if (totalScore < 100) {
            totalScore += score[i];
            arr.push(totalScore);
        }
    }

    if (100 - arr[arr.length - 1] === 0) {
        return totalScore;
    } else {
        a = 100 - arr[arr.length - 2];
        b = arr[arr.length - 1] - 100;
    }

    if (a < b) {
        return arr[arr.length -2];
    } else {
        return arr[arr.length-1];
    }

}

// console.log(solution([10,20,30,40,50,60,70,80,90,100])) // 100
// console.log(solution([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]))// 87



console.log(solution([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])); // 100
console.log(solution([1, 2, 3, 5, 8, 13, 21, 34, 55, 89])); // 87
console.log(solution([1, 2, 3, 5, 8, 13, 21, 34, 11, 4])); // 102
console.log(solution([1, 2, 3, 5, 8, 13, 21, 34, 12, 4])); // 99
console.log(solution([1, 2, 3, 5, 8, 13, 21, 34, 12, 2])); // 101
