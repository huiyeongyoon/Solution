// arr 배열에서 홀수만 출력하시오
function solution(arr){
    let odd = "홀수:";
    //let even = "짝수: ";
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1) {
            odd += " " + arr[i] ;
        }
        // if(arr[i] % 2 === 0 ) {
        //     even += " " + arr[i] ;
        // }
    }
    return odd;
    //return even;
}

console.log(solution([1, 3, 2, 4, 5, 8]));
