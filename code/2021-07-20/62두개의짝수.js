function solution(num) {

    let a = 0;
    let b = 0;
    let answer = [];
    for (let i = 0; i < num; i++) {
        a += 1;
        for (let j = 0; j < num; j++) {
            b +=1;
            if (a * b <= num && a * b % 2 === 0) {
                if ( a % 2 === 0 && b % 2 === 0) {
                    answer.push(a*b);
                }
            }
        }
        b = 0;

    }
    answer = Array.from(new Set(answer));

    console.log(answer.length);
}

solution(10); // 2
solution(20); // 5
// solution(12); // 3