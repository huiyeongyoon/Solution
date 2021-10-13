function solution(arr) {
    //2의 배수 구하기기
    const squareBoxOfTwo = [];
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        let result = arr[i] * 2;
        squareBoxOfTwo.push(result);
    }
    console.log(squareBoxOfTwo);

    for (let i = 0; i < squareBoxOfTwo.length; i++) {
        if (squareBoxOfTwo[i] === 0) {
            break;
        }

        for (let j = 0; j < arr.length; j++) {
            if (squareBoxOfTwo[i] === arr[j]) {
                answer +=1;
                break;
            }
        }
    }
    return answer;
}

console.log(solution([1, 4, 3, 2, 9, 7, 18, 22, 0]));
// 2 4 18
// 3