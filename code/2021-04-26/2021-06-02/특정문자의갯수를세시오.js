// 아래 문자열에서 b와 공백의 갯수를 구한 후 곱한 값은 몇인가?
function emptySpace(letter) {
    return letter === " ";
}

function letterB(letter) {
    return letter === "b";
}

function solution(str){
let bCount = 0;
let emptyCount = 0;
for (let i = 0; i < str.length; i++) {
    if(emptySpace(str[i])) {
        emptyCount += 1;
    }
    if(letterB(str[i])) {
        bCount += 1;
    }
}

return emptyCount * bCount;
}

console.log(solution('abc def abc def abc def abc def abc def abc def'));
//console.log(bCount * EmptyCount);