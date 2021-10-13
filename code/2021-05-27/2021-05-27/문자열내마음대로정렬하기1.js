function solution(strings, n) {
    var answer;
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i].charAt(n);
    }

    console.log(result);
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            //console.log(i);
            //console.log(j);
            if(result[i] > result[j] || result[j] === result[i]  ){
                [strings[i], strings[j]] = [strings[j],strings[i]]
            }
        }
    }
    return strings;
}

//console.log(solution(["sun", "bed", "car"], 1))
console.log(solution(["abce", "abcd", "cdx"], 2))