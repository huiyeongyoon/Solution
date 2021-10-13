// result = Math.abs(tuner1[0] - tuner1[1]);


// 측정값의 차이는 2보다 작거나 같으므로 첫 번째 참치의 값어치는 5가 된다
// 두 번째 참치를 측정했을 때 측정값으로 (2와 8)이 나오는데 이 값은 2보다 크다. 따라서 앱에서 돌려주는 값 4가 참치의 값어치가 된다.
// 세 번째 참치의 값어치는 6(6 - 5 ≤ 2)이고 네 번째 참치의 측정값(6과 3)의 차이는 2보다 크기 때문에 참치의 값어치는 앱에서 측정해준 값 7이 된다.
function solution(totalTunerAmount, standardWeight, tunerWeight) {
    let result = [];
    let answer = 0;



    for (let i = 0; i < totalTunerAmount; i++) {
        result.push(Math.abs(tunerWeight[i][0] - tunerWeight[i][1]));
        if (i === 0 || i === 1) {
            if (result[i] <= standardWeight[0]) {
                if (tunerWeight[i][0] > tunerWeight[i][1]) {
                    answer += tunerWeight[i][0];
                } else {
                    answer += tunerWeight[i][1]
                }
            } else {
                answer += standardWeight[0];
            }
        }
        if (i === 2) {
            console.log(result[i])
            if (result[i] <= standardWeight[1]) {
                if (tunerWeight[i][0] > tunerWeight[i][1]) {
                    answer += tunerWeight[i][0];
                } else {
                    answer += tunerWeight[i][1]
                }
            } else {
                answer += standardWeight[1];
            }
        }

        if (i === 3) {

            if (result[i] <= standardWeight[2]) {
                if (tunerWeight[i][0] > tunerWeight[i][1]) {
                    answer += tunerWeight[i][0];
                } else {
                    answer += tunerWeight[i][1]
                }
            } else {
                answer += standardWeight[2];
            }
        }
    }
    console.log(answer);

}

console.log(solution(4,[2,4,7], [[3,5],[2,8],[6,5],[6,3]]));