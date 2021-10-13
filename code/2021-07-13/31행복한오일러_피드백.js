function solution(totalScore) {
    for (let i = 0; i < totalScore.length; i++) {
        let sum = 0;
        for (let j = 0; j < totalScore[i].length; j++) {
            sum += totalScore[i][j];
        }

        if (sum > 8) {
            console.log(i + 1);
            return;
        }
    }
}

solution([[5,3], [6,2], [7,2], [5,3], [5,4], [0,4], [0,6], [0,0]]); //3
