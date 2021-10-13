function solution(n) {
    let count = 0;
    let arr = [];
    while (true) {

        if (n/10 > 1){
            n /= 10
            count +=1;
        } else {
            break;
        }
    }

}

console.log(solution(9730)); // 10109