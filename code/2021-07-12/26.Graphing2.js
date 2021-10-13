function solution(days, amount) {
    let milk = '*';
    let result = '';
    let answer = [];
    for (let i = 0; i < days; i++) {
        for (let j = 0; j < 70; j++) {
            if(amount[i] > j){
                result += milk;
            }
        }
        answer.push(result);
        result = '';
    }
    return answer.toString();
}
console.log(solution(4,[5,15,40,25]));
//이거 return 하는건 못하나?