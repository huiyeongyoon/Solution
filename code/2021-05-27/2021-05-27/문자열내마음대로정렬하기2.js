function solution(strings, n) {
    var answer = [];
    let result = [];
    for (let i = 0; i < strings.length; i++) {
        result.push(strings[i].charAt(n));
    }

    // console.log(result);
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] > result[j]) {
                console.log(i, "i1", strings[i]);
                console.log(j, "j1", strings[j]);
                [strings[i], strings[j]] = [strings[j], strings[i]];
                console.log(i, "i2", strings[i]);
                console.log(j, "j2", strings[j]);
            }
            if(result[i] === result[j]){
                console.log(i, j, result[i], result[j]);
                if(result[i+1] > result[j+1]) {
                    console.log("dd");
                [strings[i], strings[j]] = [strings[j], strings[i]];
                }
            }
        }
    }
    return strings;
}

console.log(solution(["sun", "bed", "car"], 1))
console.log(solution(["abce", "abcd", "cdx"], 2))
//console.log(solution(["abcd", "efgh", "ijk"], 2))