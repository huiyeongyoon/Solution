function solution(arr) {
    let result = arr[0];
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (result < arr[i]) {
            // console.log(result, arr[i]);
            result = arr[i];
        } else if(arr[i] === 10){
            answer.push(-1);
        } else
            answer.push(arr[i]);
    }

    return answer;
}

console.log(solution([4,3,2,1]));
console.log(solution([4,3,1,2,7,5,3]));
console.log(solution([10]));