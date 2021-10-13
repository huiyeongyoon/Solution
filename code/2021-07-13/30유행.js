//맘에안들어
function solution(total, numbers) {

    for (let i = 0; i < total; i++) {
        for (let j = i + 1; j < total; j++) {
            if (numbers[i] === numbers[j]) {
                console.log(numbers[i])
            }
        }
    }
}

solution(5,[512,532,532,585,599,599,599,585]); //532