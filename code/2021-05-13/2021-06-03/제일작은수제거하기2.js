//입력된 값중 제일 작은값 제외하고 출력하기
//제일작은수 구하는 함수
function getMin(arr) {
    let min = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            min = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }

    return min;
}

function inputNumber(arr, inputNumber) {
    for (let i = 0; i < arr.length; i++) {
        if(min < arr[i]){
            inputNumber.push(arr[i]);
        }
    }
    return inputNumber;
}

function solution(arr) {
    let answer = [];
    min = getMin(arr);
    answer = inputNumber(arr, answer);

    for (let i = 0; i < answer.length; i++) {
        for (let j = i+1; j < answer.length; j++) {
            if(answer[i] > answer[j]) {
                [answer[i],answer[j]] = [answer[j],answer[i]];
            }
        }
    }

    return answer;

}
console.log(solution([2,1,4,3]));

