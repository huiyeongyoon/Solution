function solution(arr1, arr2) {
    let answer = [[]];
    let result;
    //console.log(arr1[0][0] + arr2[0][0]);
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            //console.log("arr1:", arr1[i][j]);
            //console.log("arr2:", arr2[i][j]);
            result = arr1[i][j] + arr2[i][j];
            answer.push(result);
        }
    }

    return answer;

}


console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]));