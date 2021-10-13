// 제시가격 a
// 판매사제시가격 c
// a와c가 같다면 입찰
// 같지않으면 입찰시 b씩 가격상승
// 그리고 판매사는 d씩 내려간다
function solution(a, b, c, d) {

    while (a < c) {
        a += b;
        c -= d;
    }

    return a;
}

console.log(solution(150, 50, 1000, 100)); //450