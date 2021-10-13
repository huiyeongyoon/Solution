// 완전수: 약수면서 다더하면 같은수


// 314를 314를 제외한 모든 정수로 나눠준다
// 나누기가 가능한 값을 전부다 더했을때 314가 나오면 정답


// 자바스크립트는 이상한 짓을 해서 다른언어처럼 해결불가
function solution(num) {
    const arr = []
    for (let i = 0; i < num; i++) {
        arr.push(i)
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(314 / arr[i]);
        console.log(Math.floor(314 / arr[i]));
        if (314 / arr[i]) {

        }
    }

}

// console.log(solution(314));
console.log(solution(6));