function solution(strings, n) {
    var answer = [];
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i].charAt(n);
    }

    console.log(result);
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if( result[i] > result[j]){
                if(strings[i] > strings[j]){
                answer = [strings[i], strings[j]] = [strings[j], strings[i]]
                }
            }
        }
    }
    return answer;
}

console.log(solution(["sun", "bed", "car"], 1))
console.log(solution(["abce", "abcd", "cdx"], 2))
//console.log(solution(["abcd", "efgh", "ijk"], 2))