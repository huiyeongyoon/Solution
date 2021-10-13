function solution(cards) {
    cards.sort(function (a,b){
        return b - a;
    });

    let same = [];
    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            if (cards[i] === cards[j]) {
                same.push(cards[i]);
            }
        }
    }

    if (same.length === 3) {
        return 10000 + same[0] * 1000;
    }

    if (same.length === 1) {
        return 1000 + same[0] * 100;
    }

    if (same.length === 0) {
        return cards[0] * 100;
    }
}

console.log(solution([3, 3, 5])); // 1300
console.log(solution([8, 8, 8])); // 18000
console.log(solution([3, 8, 9])); // 900