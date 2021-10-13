
function solution(a,b,c,d,e,f,g,h,i,j,k) {

    const arr = [b,c,d,e,f,g,h,i,j,k]
    let odd = 0;
    let even = 0;
    for (let i = 0; i < a; i++) {
        if (arr[i] % 2 === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }
    return `짝수: ${even} , 홀수: ${odd}`
}

//3/7
console.log(solution(10, 7, 15, 33, 999, 455, 464, 899, 566, 10, 5));