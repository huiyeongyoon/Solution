function solution(days, amount) {

    let milk = '*';
    let answer = [];

    for (let i = 0; i < days; i++) {
        answer.push([]);
    }

    for (let i = 0; i < days; i++) {
        for (let j = 0; j < 70; j++) {
            if(amount[i] > j){
                answer[i].push(milk);
            }
        }
    }

    console.log(answer);
    for (let i = 0; i < answer.length; i++) {
        const a = answer[i];
        let s = '';
        for (let j = 0; j < a.length; j++) {
            s += a[j];
        }
        console.log(a.length, s);
    }
}

solution(4,[5,15,40,25]);
