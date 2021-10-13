function solution(arr) {

    //제일작은수 구하기
    //입력된 값중 제일 작은값 제외하고 출력하기
    let min = 100;
    let answer = [];
    for (let i = 0; i < arr.length; i++) {

        if(min > arr[i]){

            min = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {

        if(min !== arr[i]){
            answer.push(arr[i]);

        }
    }
    return answer;

}

console.log(solution([4,3,2,1]));

