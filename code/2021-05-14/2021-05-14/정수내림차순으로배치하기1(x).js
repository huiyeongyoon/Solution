function solution(n) {
    let answer = 0;
    let nChangeToString = String(n); //118372
    let nLength = nChangeToString.length; //6

    for (let i = 0; i < nLength; i++) {
        let min = 11;

        if(min > nLength[i]){
            min = nChangeToString[i];
        }
        
        for (let i = 0; i < nLength; i++) {
            if(min < nChangeToString[i]  ) {
                answer += nChangeToString[i];
                console.log(answer);
            }
        }
    }

    //나온값을 가장큰수부터 출력한다 내림차순
    //console.log(nLength)
    //return answer;

}

console.log(solution(118372));