function solution(arr) {
    let answer = [];
    let temp = -1; //이게더좋은거라는데 아직 이해안감
    for (let i = 0; i < arr.length -1; i++) {

        if(temp !== arr[i] ) {
            answer.push(arr[i]);

            temp = arr[i];
        }
    }

    return answer;
}
 console.log(solution([1,1,3,3,0,1,1]));
 //console.log(solution([4,4,4,3,3]));
 //console.log(solution([4,4,4,3,3,2,2,2,2,2,2,1]));