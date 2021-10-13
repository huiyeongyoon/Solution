function solution(childrenNum,kingNumber,iq) {

    let arr = [];
    let answer = 0;
    for (let i = 0; i < childrenNum; i++) {
        arr.push(iq[i] ** kingNumber);
    }

    arr.sort(function (a,b){
        return b - a;
    });

    for (let i = 0; i < arr.length; i++) {
        if (answer <  answer + arr[i]) {
            answer += arr[i];
        }

    }

    return answer;
}


console.log(solution(3,3,[2,-1,1])); //8