// 데이터는 공급된다
// 데이터는 이월된다
// 오일러가 사용한 데이터양
// 오일러가 n+1 달에 사용한 데이터 양은?


function solution(inputData, length, dataUsageAmount) {

    let chargeAmount = inputData;
    let answer = inputData;
    for (let i = 0; i < length; i++) {
        answer += chargeAmount - dataUsageAmount[i];
        console.log(answer);
    }

    return answer;
}

console.log(solution(10, 3, [4,6,2]));