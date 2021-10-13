function solution(s) {
    var answer = [];
    let result = "";
    for (let i = 0; i < s.length; i++) {
        answer.push(s[i]);
    }

    for (let i = 0; i < answer.length; i++) {
        for (let j = i + 1; j < answer.length; j++) {
            if (answer[i] < answer[j]) {
                [answer[i], answer[j]] = [answer[j], answer[i]];
            }
        }
    }

    for (let i = 0; i < answer.length; i++) {
        result += answer[i];
    }
    return result;
}

console.log(solution("Zbcdefg")); // ['Z', 'b', 'c', 'd', 'e', 'f', 'g']

// console.log('Z' > 'b');
// console.log('Z' < 'b');