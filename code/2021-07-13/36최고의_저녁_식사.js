function solution(a,b,c,d,e){

    let chef1 = 0;
    let chef2 = 0;
    let chef3 = 0;
    let chef4 = 0;
    let chef5 = 0;
    let arr = [];
    let winner = 0;
    let winnerScore = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < a.length; j++) {
            if (i === 0) {
                chef1 += a[j];
            }
            if (i === 1) {
                chef2 += b[j];
            }
            if (i === 2) {
                chef3 += c[j];
            }
            if (i === 3) {
                chef4 += d[j];
            }
            if (i === 4) {
                chef5 += e[j];
            }
        }

    }
    arr.push(chef1);
    arr.push(chef2);
    arr.push(chef3);
    arr.push(chef4);
    arr.push(chef5);

    for (let i = 0; i < arr.length; i++) {
        if (winnerScore < arr[i]) {
            winnerScore =  arr[i];
            winner = i + 1;
        }

    }
    console.log(winner, winnerScore)
}

solution([5, 4, 4, 5], [5, 4, 4, 4], [5, 5, 4, 4], [5, 5, 5, 4], [4, 4, 4, 5]); // 4,19
solution([4, 4, 3, 3], [5, 4, 3, 5], [5, 5, 2, 4], [5, 5, 5, 1], [4, 4, 4, 4]); // 2, 17