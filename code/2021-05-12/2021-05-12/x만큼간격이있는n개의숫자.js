//x 의 크기만큼 곱하여 n번수만큼 출력한다
function solution(n,x) {

//let arr = new Array(5);
    let arr = []
    for(let i = 0; i < n; i++) { //5번 곱해주고
        arr[i] = (i * x) + x ;   //2의 배수로
    }
    return arr;
}
    console.log(solution(5,2));
