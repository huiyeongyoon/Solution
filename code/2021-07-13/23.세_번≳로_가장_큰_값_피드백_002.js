// 세번 째 큰값
function solution(num){

    // 1. 중복 제거
    // 2. 정렬 (내림차순)
    // 3. 3번째값 출력

    //set type array 타입으로 배열을 변경한다
    num = Array.from(new Set(num));
    num = num.sort(function (a,b) {
        return b - a;
    })
    console.log(num);
    return num[2]

}

console.log(solution([1, 4, 2, 4, 6, 6, 12, 1, 13, 1000])); // 12