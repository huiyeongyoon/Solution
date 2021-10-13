function swap(strings, i , j) {
    [strings[i], strings[j]] = [strings[j], strings[i]];
}

function gt(a, b) {
    // return a > b ? true : false;
    if (a > b) {
        return true;
    }
    return false;
}

function eq(a, b) {
    // return a === b ? true : false;
    if (a === b) {
        return true;
    }
    return false;
}

function solution(strings, n) {
    var answer = [];

    for (let i = 0; i < strings.length; i++) {
        for (let j = i + 1; j < strings.length; j++) {
            let letter1 = strings[i][n];
            let letter2 = strings[j][n];

            if (gt(letter1, letter2)) {
                swap(strings, i, j);
            }
            if (eq(letter1, letter2)) {
                if (gt(strings[i], strings[j])) {
                    swap(strings, i, j);
                }
            }
        }
    }
    answer = strings;
    return answer;
}

console.log(solution(["sun", "bed", "car"], 1))
console.log(solution(["abce", "abcd", "cdx"], 2))
//console.log(solution(["abcd", "efgh", "ijk"], 2))