function canBeDivided( arr, divisor){
    let result = [];
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]/divisor);
        if( result[i] % 1 === 0){
            answer.push(result[i]);
        }
    }
    range(answer);
    return answer;
}

function range(answer){
    for (let i = 0; i < answer.length; i++) {
        for (let j = i + 1; j < answer.length; j++) {
            if(answer[i] > answer[j]){
                [answer[i], answer[j]] = [answer[j], answer[i]];
            }
        }
    }
    return answer;
}
function addMinusOne(arr){
    //배열이 비워져있으면
    if(arr.length === 0){
        arr.push(-1);
    }
    return arr;
}

function solution(arr, divisor) {

    let answer = canBeDivided(arr, divisor);
    answer = addMinusOne(answer);
    return answer;
}

console.log(solution([5,9,7,10], 5));
console.log(solution([2,36,1,3], 1));   //내림차순
console.log(solution([3,2,6], 10));     //-1취급