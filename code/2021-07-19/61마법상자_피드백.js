function solution(cards) {
    cards.sort(function (a,b){
        return b - a;
    });

    let same = [];
    const result = [];
    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            if (cards[i] === cards[j]) {
                result.push(cards[i] === cards[j]);
                same.push(cards[i]);
            }
        }
    }

    // let count = result.filter(function (x) {
    //     return x;
    // }).length;
    let count = result.filter(x => x).length;

    // console.log('count', count);
    // console.log('same', same);

    if (count === 3) {
        return 10000 + cards[0] * 1000;
    }

    if (count === 1) {
        return 1000 + same[0] * 100;
    }

    if (count === 0) {
        return cards[0] * 100;
    }

    console.log(result);

}

console.log(solution([3, 3, 5])); // 1300
console.log(solution([8, 8, 8])); // 18000
console.log(solution([3, 8, 9])); // 900