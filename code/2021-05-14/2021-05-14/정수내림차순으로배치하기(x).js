function solution(n) {
    let answer = 0;
    let nChangeToString = n.toString();
    let nLength = nChangeToString.length;
    let result = "";
    for (let i = 0; i < nLength; i++) {
        result += nChangeToString[i];

    }
    return result;
}

console.log(solution(118372));