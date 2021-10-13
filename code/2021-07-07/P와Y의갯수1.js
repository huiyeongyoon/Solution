function solution(s){
    let answer = true;
    let pNum = 0;
    let nNum = 0;
    for (let i = 0; i < s.length; i++) {

        if (s[i] === 'p' || s[i] === 'P') {
            pNum += 1;
        } else if (s[i] === 'y' || s[i] === 'Y') {
            nNum += 1;
        }
    }

    answer = pNum === nNum;

    return answer;
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));