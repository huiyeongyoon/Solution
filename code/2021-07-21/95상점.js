function solution(money,shop,price) {
    let answer1 = 0;
    let answer2 = 0;

    first:
    for (let i = 0; i < shop; i++) {
        for (let j = 0; j < shop; j++) {
            // console.log(i, 'iii', price[i]);
            // console.log(j, 'jjj', price[j]);
            if (price[i] + price[j] === money) {
                answer1 = i + 1;
                answer2 = j + 1;
                break first;
            }
        }
    }

    console.log(answer1,answer2);
}

solution(100,3,[5,75,25]); // 2 3
solution(200,7,[150,24,79,50,88,345,35]); // 1 4