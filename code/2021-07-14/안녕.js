
function solution(a){

    const arr = [1,2,3,4,6,7,8,9]

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[i] === arr[j]) {
                console.log(arr[i])
            } else {
                //console.log(arr[i])
            }
        }

    }
}


solution([1,2,3,4,5,6,7,8,9]);