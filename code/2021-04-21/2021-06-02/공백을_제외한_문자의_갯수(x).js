// 공백을 제외한 문자의 갯수는?
function emptySpace(letter){
    let result = false;
    if (letter === ' ') {
        return result;
    }
}

function isLetter(letter){
    let result = true;
    if (letter !== ' ') {
        return result;
    }
}

// console.log(emptySpace(' ')); // true
// console.log(isLetter('')); // false
function solution(sentence){
    let answer = 0;
    for (let i = 0; i < sentence.length; i++) {
        answer = emptySpace(sentence[i]);
        answer = isLetter(sentence[i]);
    }
    return answer;
}

console.log(solution('The next day the little prince came back'));