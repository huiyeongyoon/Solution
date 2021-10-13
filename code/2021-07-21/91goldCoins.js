// 1 23 456 78910
function solution(days) {

    let totalCoins = 0;
    let counts = 0;
    for (let i = 1; i <= days; i++) {
        for (let j = 1; j <= i; j++) {
            totalCoins += i;
        }
        counts += i;
        if (counts === days) {
            break;
        }
    }
    console.log(totalCoins);
}

solution(10); // 30