// 1과 자기 자신밖에 없는 수
function solution(min, max, th) {

    const arr = [];
    for (let i = min; i < max; i++) {
        if (i % 2 !== 0 && i !== 1)
            arr.push(i);
    }
    console.log(arr);
}


console.log(solution(1,10,3));
console.log(solution(1,1000,169));