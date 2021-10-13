function solution(a,b,c) {
    let s = '0123456789';
    let result = String(a * b * c);
    let arr = [];
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (s[i] === result[j]) {
                arr.push(s[i]);
            }
        }
    }

    console.log(arr);

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (result[i] === arr[j]) {
                answer += result[i];
            }
        }
    }

    console.log(answer);
}

solution(123,234,345);