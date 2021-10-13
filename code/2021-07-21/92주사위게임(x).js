// 3 주사위 값 구하기
// 세 개의 주사위의 면의 수가 주어지면, 가장 많이 발생되는 세 개의 주사위의 눈의 합은 얼마인지 구하여라
// 만일 발생되는 빈도수가 같다면 세 개의 주사위 눈의 합이 최소인 것을 선택
function solution(dice1,dice2,dice3) {

    const arr = [];
    const result = {};
    for (let i = 1; i <= dice1; i++) {
        for (let j = 1; j <= dice2; j++) {
            for (let k = 1; k <= dice3; k++) {
                arr.push(i+j+k);
            }
        }
    }

    console.log(arr);
    arr.forEach((x) => {
        result[x] = (result[x] || 0)+1;
    });

    console.log(result);
}


solution(3,2,3);