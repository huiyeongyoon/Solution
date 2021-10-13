// 콜라 n
// 빈병 k
function solution(n,k) {
    let answer = n;
    let sum = n;
    let flag = true;
    while (flag) {
        sum = sum / k;
        answer += Math.floor(sum);
        if (sum < k ) {
            flag = false;
        }
    }
    console.log(answer)
}

solution(4,3); // 5
solution(10,3); // 14