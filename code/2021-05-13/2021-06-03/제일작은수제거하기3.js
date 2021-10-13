//입력된 값중 제일 작은값 제외하고 출력하기
//제일작은수 구하는 함수
function getMin(arr) {
    let min = 0;

    // 제일 큰 값을 넣는다
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                min = arr[i];
            }
        }
    }
    //console.log('min', min);
    // 제일 작은값 구하기
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }

    return min;
}

// 가장 작은 수를 제외한 새로운 배열 생성
function inputNumber(arr, min) {
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        if(min < arr[i]){
            answer.push(arr[i]);
        }
    }
    return answer;
}
//정렬
function sorting(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i+1; j < input.length; j++) {
            if(input[i] > input[j]) {
                [input[i],input[j]] = [input[j],input[i]];
            }
        }
    }
    return input;
}
function solution(arr) {
    let min = getMin(arr);
    let input = inputNumber(arr, min);
    // let input = inputNumber(arr, getMin(arr));
    return answer = sorting(input);

}
console.log(solution([2,1,4,3]));
console.log(solution([10]));