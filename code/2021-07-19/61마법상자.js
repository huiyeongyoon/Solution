function solution(cards) {

    let answer = 0;

    cards.sort(function (a,b){
        return b - a;
    });

    if (cards[0] === cards[1] && cards[1] === cards[2]) {
        answer = 10000 + cards[0] * 1000;
    } else if (cards[0] === cards[1]) {
        answer = 1000 + cards[0] * 100;
    } else if (cards[0] === cards[2]) {
        answer = 1000 + cards[0] * 100;
    } else if (cards[1] === cards[2]) {
        answer = 1000 + cards[1] * 100;
    } else {
        answer = cards[0] * 100;
    }

    return answer;
}

console.log(solution([3,3,5])); // 1300
console.log(solution([8,8,8])); // 18000
console.log(solution([3,8,9])); // 900