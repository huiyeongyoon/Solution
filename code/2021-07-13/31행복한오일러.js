function solution(totalScore) {
    for (let i = 0; i < totalScore.length; i++) {
        for (let j = 0; j < totalScore[i].length; j++) {
            if (totalScore[i][j] + totalScore[i][j+1] > 8) {
                console.log(i + 1);
                return console.log(totalScore[i]);
            }
        }
    }
}

solution([[5,3], [6,2], [7,2], [5,3], [5,4], [0,4], [0,6], [0,0]]); //3
