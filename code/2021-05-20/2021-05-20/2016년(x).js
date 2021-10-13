function solution(months, inputDays) {

    let answer = '';
    let daysAlphabet = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    let result ='';
    let finalResult;

    for (let i = 0; i < months; i++) {
        for (let j = 0; j < inputDays; j++) {
            result = inputDays % daysAlphabet.length;
        }
    }

    for (let i = 0; i < result; i++) {
        finalResult = daysAlphabet[i];
    }

    console.log(finalResult);

    return answer;
}

console.log(solution(1,6 ))