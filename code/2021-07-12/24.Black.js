function solution(chessPiece) {

    const arr = [1,1,2,2,2,8]
    let answer = [];

    for (let i = 0; i < chessPiece.length; i++) {
        let result = arr[i] - chessPiece[i];
        answer.push(result)
    }
    return answer;

}



console.log(solution([0,1,2,2,2,7])); // 1,0,0,0,0,1
console.log(solution([2,1,2,1,2,1])); //-1,0,0,1,0,7