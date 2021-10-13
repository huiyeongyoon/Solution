function solution(days, amount) {

    const result = [];

    let milk = '*';
    let answer = '';
    for (let i = 0; i < days; i++) {
        for (let j = 0; j < 70; j++) {
            if(amount[i] > j){
                answer += milk;
            }
        }
        // console.log(amount[i], answer);
        result.push([amount[i], answer]);
        answer = '';
    }

    // console.log('result', result);
    return result;
}

const result = solution(4,[5,15,40,25]);
for (let i = 0; i < result.length; i++) {
    const r = result[i];
    console.log(r[0], r[1]);

    // console.log(result[i][0], result[i][1]);
}