function totalScore(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

function solution(a, b){
    const aTotal = totalScore(a);
    const bTotal = totalScore(b);

    if (aTotal > bTotal) {
        return aTotal;
    } else {
        return bTotal;
    }
}

console.log(solution([100,80,70,60],[80,70,80,90]));