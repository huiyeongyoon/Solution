function solution(days, amount) {

    let milk = '*';
    let answer = [[],[],[],[]];

    for (let i = 0; i < days; i++) {
        for (let j = 0; j < 70; j++) {
            if(amount[i] > j){
                answer[i].push(milk);
            }
        }
    }
    console.log(answer);
}

console.log(solution(4,[5,15,40,25]));
