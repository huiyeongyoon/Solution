//맘에안들어
function solution(total, numbers) {
    const arr = [];
    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i]);
        arr.push([numbers[i], 1]);
    }
    console.log(arr);
}

solution(5,[512, 532, 532, 585, 599]); // 532
// 512: 1
// 532: 2
// 585: 1
// 599: 1



// 532: 2
// 512: 1
// 585: 1
// 599: 1