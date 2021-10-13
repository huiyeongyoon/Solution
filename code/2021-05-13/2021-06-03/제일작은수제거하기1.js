//제일작은수 구하기
//입력된 값중 제일 작은값 제외하고 출력하기

function solution(arr) {
    answer = [];
    temp = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log("i", arr[i]);
            console.log("j", arr[j])
            if (arr[i] < arr[j]) {
                arr[i] = arr[j];
                arr[temp] = arr[i];
                arr[j] = arr[temp];
            }
        }
        answer.push(arr[i]);
    }
    //answer.pop();
    return answer;
}
console.log(solution([2,3,4,1]));

