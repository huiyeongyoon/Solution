function solution(myScore,averageScore){
    let totalSubject = 4;
    let totalScore = 0;
    let averageTotalScore = 0;

    for (let i = 0; i < totalSubject; i++) {
        totalScore += myScore[i];
        averageTotalScore += averageScore[i];
    }

    if (totalScore > averageScore) {
        return totalScore;
    } else {
        return averageTotalScore;
    }
}

console.log(solution([100,80,70,60],[80,70,80,90]));