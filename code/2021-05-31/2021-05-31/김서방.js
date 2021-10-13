function solution(seoul) {
    var answer = '';
    let result = [];
    for (let i = 0; i < seoul.length; i++) {

        if("Kim" === seoul[i] ){
            result.push(i);
            answer = "김서방은 " + result + "에 있다";
        }
    }
            return answer;
}

console.log(solution(["Jane", "Kim"]));