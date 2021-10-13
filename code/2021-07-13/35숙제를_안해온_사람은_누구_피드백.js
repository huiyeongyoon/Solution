function solution(arr) {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

    arr.sort((a, b) => a - b);
    // console.log(arr);

    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        // console.log(i, numbers[i], arr[i]);
        if (numbers[i] !== arr[i]) {
            result.push(numbers[i]);
            // arr[i] = numbers[i];
            //시작 끝 어디
            arr.splice(i, 0, numbers[i]);
            // i -=1;
            // console.log('=====', arr);
        }
    }


    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

solution([3, 1, 4, 5, 7, 9, 6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
// 2
// 8

