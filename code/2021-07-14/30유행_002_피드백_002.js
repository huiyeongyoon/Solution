//맘에안들어
function solution(total, numbers) {
    const obj = {};
    for (let i = 0; i < numbers.length; i++) {
        const key = numbers[i];
        // console.log(obj[key]);
        if (obj[key]) {
            obj[key] += 1; //벨류증가
        } else {
            obj[key] = 1; //벨류값넣어줘야 키생성됨
        }
    }
    // console.log(obj);

    let max = 0;
    let result = '';
    for (const key in obj) { //key key값
        // console.log(key);
        // console.log(obj[key]);

        if (max < obj[key]) { //프로펄티
            max = obj[key];
            result = key;
        }
    }
    console.log(max);
    console.log(result);
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