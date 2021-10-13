//배열에다가 인풋값을 넣어준다
function changeToarr(n, result) {
    number =+ n + ""

    for (let i = 0; i < number.length; i++) {
        result.push(number[i]);
    }
    return result;
}

//배열에 존재하는 값을 낮은값 순서대로 정렬해준다
function sorting(result) {
    let resultSorting = '';
    for (let i = 0; i < result.length; i++) {
        for (let j = i+1; j < result.length; j++) {
            if (result[i] > result[j]) {
                [result[i], result[j]] = [result[j], result[i]];
            }
        }
        resultSorting += (result[i]);
    }
    return resultSorting;
}
function solution(n) {
    let result = [];
    changeToarr(n, result);
    return sorting(result);
}

console.log(solution(118372));