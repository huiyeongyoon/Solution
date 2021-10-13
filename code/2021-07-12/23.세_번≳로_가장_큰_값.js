// 세번 째 큰값
function solution(num){
    let max = num[0];
    let maxBox = []
    for (let i = 0; i < num.length; i++) {
        if (max < num[i]) {
            max = num[i];
            maxBox.push(max);
        }
    }
    return maxBox.slice(-3,-2);
}

console.log(solution([1, 4, 2, 4, 6, 6, 12, 1, 13, 1000]));