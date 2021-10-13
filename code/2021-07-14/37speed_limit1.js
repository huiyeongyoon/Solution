function solution(options,distanceTraveled1,distanceTraveled2,distanceTraveled3) {

    let answer = 0;

    for (let i = 0; i < options; i++) {
        if (i === 0) {
            answer += distanceTraveled1[0] * distanceTraveled1[1];
        } else if (i === 1) {
            answer += distanceTraveled2[0] * (distanceTraveled2[1] - distanceTraveled1[1]);
        } else if (i === 2) {
            answer += distanceTraveled3[0] * (distanceTraveled3[1] - distanceTraveled2[1]);
        }
    }
    console.log(answer);
}
solution(3,[20,2],[30,6],[10,7]); // 170
solution(2,[60,1],[30,5]); // 180