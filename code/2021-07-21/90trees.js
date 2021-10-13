// 300미터 1미터 마다
// 100~200미터 도로 건설

function solution(treeNums, road) {
    let answer = 0;
    let result = Math.abs(road[0] - road[1])

    answer = treeNums[0] - result;
    console.log(answer / treeNums[1])
}

solution([300,1],[100,200]);
