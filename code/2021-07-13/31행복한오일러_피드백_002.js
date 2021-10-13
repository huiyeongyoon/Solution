function solution(totalScore) {
    for (let i = 0; i < totalScore.length; i++) {
        let sum = totalScore[i][0] + totalScore[i][1];

        if (sum > 8) {
            console.log(i + 1);
            return;
        }
    }
}

solution([[5,3], [6,2], [7,2], [5,3], [5,4], [0,4], [0,6], [0,0]]); //3
