function solution(score) {

    let totalScore = 0;
    for (let i = 0; i < score.length; i++) {
        if (totalScore < 100) {
            totalScore += score[i];
        }

        if (totalScore > 100) {
            totalScore -= score[i];
        }
    }


    return totalScore;
}

console.log(solution([10,20,30,40,50,60,70,80,90,100])) // 100
console.log(solution([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]))// 87