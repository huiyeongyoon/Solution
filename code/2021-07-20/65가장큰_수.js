function solution(inputNum) {

    let max = 0;
    let times = 0;
    for (let i = 0; i < inputNum.length; i++) {
        if (max < inputNum[i]) {
            max = inputNum[i];
            times = i + 1;
        }
    }
    console.log(max, times);
}

solution([10, 20, 30, 40, 50, 60, 70, 80, 90]); // 90 9