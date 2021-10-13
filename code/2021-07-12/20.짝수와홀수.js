//짝수의 합과 홀수의 합 중에서 어느 숫자가 더 큰 수인지
//N개의 음이 아닌 정수들을 읽어 들여 짝수의 합과 홀수의 합을 구하는 프로그램
function solution(a,b,c,d,e) {

    let arr = [b,c,d,e];
    let odd = 0;
    let even = 0;
    for (let i = 0; i < a; i++) {
        if (arr[i] % 2 === 0) {
            even += arr[i];
        } else {
            odd += arr[i];
        }
    }
    console.log(even, odd); // 16 8
}

solution(4,5,3,6,10);