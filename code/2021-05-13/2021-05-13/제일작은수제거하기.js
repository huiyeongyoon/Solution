function solution(arr) {
    let answer = [];
    //배열안에 있는 요소를 비교하여 제일 작은 값을 찾는다.
    //값을 제외한 나머지 요소들을 answer에 담는다
    //for문 돌면서 큰 값을 result에 담는다
    // 그 담긴 result의 각 요소를 인풋되는 다음 요소와 비교하여 가장 작은값을 제외한 모든 값을 result에 담는다
    let min = 100;
    for (let i = 0; i < arr.length; i++) {

        if(min > arr[i]){
            min = arr[i];
        }

    }

    for (let i = 0; i < arr.length; i++) {

        if(min !== arr[i]) { //들어온 값이 최소값과 같지 않다면
            answer.push(arr[i]); //배열에다가
        }
    }

    return answer;
}

console.log(solution([4,3,2,1]));
//console.log(solution([10]));

