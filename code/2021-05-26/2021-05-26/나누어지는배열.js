function solution(arr, divisor) {
    let answer = [];
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = (arr[i]);
        //console.log(result/divisor);
        if(result % divisor === 0) {
            answer.push(result);
        }

    }

    if(result % divisor === result) {
        answer.push(-1);
    }

    for (let i = 0; i < answer.length; i++) {
        if(answer[0] < answer[i+1]){
            answer.sort(); //sort메소드 안쓰고 어떻게?
        }
    }
    return answer;
}

console.log(solution([5,9,7,10], 5));
console.log(solution([2,36,1,3], 1));   //내림차순
console.log(solution([3,2,6], 10));     //-1취급