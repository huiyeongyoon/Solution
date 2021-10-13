const compareWord  = function(strings, n)  {

    let word1 = strings;
    let word2 = strings;

    for (let i = 0; i < strings.length; i++) {
        for (let j = i + 1; j < strings.length; j++) {
            if(word1[i][n] > word2[j][n]){ //sun에 1번째값과 bed1번쨰값을 비교한다
                [strings[j], strings[i]] = [strings[i], strings[j]] //각 번째값과 각번째값 자리바꾸기반복
            }
            if(word1[i][n] === word2[j][n]) { //abce abcd 의 2번째
                if(word1[i] > word2[j]){    //abce abcd 비교하여 i가 더클때 조건문실행
                    [strings[j], strings[i]] = [strings[i], strings[j]]
                }
            }
        }
    }
}

function solution(strings, n) {

    compareWord(strings, n);

    return strings;
}

console.log(solution(["sun", "bed", "car"], 1))
console.log(solution(["abce", "abcd", "cdx"], 2))
//console.log(solution(["abcd", "efgh", "ijk"], 2))