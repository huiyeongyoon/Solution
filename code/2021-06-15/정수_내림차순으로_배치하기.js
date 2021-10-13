// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다

function solution(n) {
    let answer = 0;
    let str = String(n);
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if(arr[i] < arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }

    return answer = arr;
}

console.log(solution(118372)); //873211
