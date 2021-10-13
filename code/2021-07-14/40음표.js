function solution(arr) {
    const ascending = [];
    const descending = [];
    let AscendingCount = 0;
    let descendingCount = 0;

    for (let i = 0; i <arr.length ; i++) {
        ascending.push(arr[i]);
        descending.push(arr[i]);
    }

    ascending.sort(function (a,b){
        return a - b;
    })
    descending.sort(function (a,b){
        return b - a;
    })

    for (let i = 0; i < ascending.length; i++) {
        if (ascending[i] === arr[i]) {
            AscendingCount += 1;
        }else if (descending[i] === arr[i]) {
            descendingCount += 1;
        }
    }

    if(AscendingCount === arr.length) {
        return 'ascending';
    } else if(descendingCount === arr.length) {
        return 'descending';
    } else {
        return 'mixed';
    }
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(solution([8, 7, 6, 5, 4, 3, 2, 1]));
console.log(solution([8, 1, 7, 2, 6, 3, 5, 4]));