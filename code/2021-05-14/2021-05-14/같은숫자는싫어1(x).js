function solution(arr) {
    let answer = [];
    let temp = [];

    for (let i = 0; i < arr.length -1; i++) {
        if(temp !== arr[i + 1] ) {  //여기 비교할때 이런식으로하면 인덱스+1번 값과 temp를 비교한다
            answer.push(arr[i]);

            temp = arr[i];
        }


    }

    return answer;
}
 console.log(solution([1,1,3,3,0,1,1]));
 //console.log(solution([4,4,4,3,3]));
 //console.log(solution([4,4,4,3,3,2,2,2,2,2,2,1]));