// n일동안 h식량 제공 q퍼즐 맞춤
// s,j식량 처음 제공일 ej식량 마지막 제공일
// 총 식량 합은?

function solution(inputNum, foodAmount, firstPeriod, secondPeriod) {
    let firstGroup = 0;
    let secondGroup = 0;
    for (let i = 0; i < inputNum[0]; i++) {
        if (i <= Math.abs(firstPeriod[0] - firstPeriod[1])) {
            firstGroup += foodAmount[i];
        }
        if (i <= Math.abs(secondPeriod[0] - secondPeriod[1])) {
            secondGroup += foodAmount[i + secondPeriod[0] - 1];
        }
    }

    console.log(firstGroup);
    console.log(secondGroup);
}

solution([4,2],[5,8,12,6],[1,3],[2,4]);
