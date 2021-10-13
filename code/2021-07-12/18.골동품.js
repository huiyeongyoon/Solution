// 제시가격 a
// 판매사제시가격 c
// a와c가 같다면 입찰
// 같지않으면 입찰시 b씩 가격상승
// 그리고 판매사는 d씩 내려간다
function solution(a, b, c, d) {
    let count = 1;
    let answer = 0;
    for (let i = 0; i <= count; i++) {
        if (a !== c) {
            a += b;
            c -= d;
            if (a === c || a > c) {
                answer = a;
                break;
            }else {
                count +=1;
            }
        } else {
            answer = a;
        }
    }

    return answer;
}

console.log(solution(150, 50, 1000, 100)); //450