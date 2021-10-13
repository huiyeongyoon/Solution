function solution(a,b) {

    let min = b[0];
    let max = b[0];
    for (let i = 0; i < a; i++) {
        if (max < b[i]) {
            max = b[i];
        }
        if (min > b[i]){
            min = b[i]
        }
    }

    return `max:${max} min:${min}`;
}

console.log(solution(12,[567, 455, 333, 678, 245, 333, 15, 444, 333, 678, 879, 321]));