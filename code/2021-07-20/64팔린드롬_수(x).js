function solution(min, max) {

    let s = [];
    let answer = 0;
    for (let i = min; i <= max; i++) {
        if (i < 10 ) {
            answer += 1;
        }
        s.push(String(i));

    }


    for (let i = 0; i < s.length; i++) {
        if (s[i][0] === s[i][1]) {
            answer += 1;
        }
    }

    return answer;
}

//console.log(solution(1,9)) //9;
console.log(solution(10,99)) //9;