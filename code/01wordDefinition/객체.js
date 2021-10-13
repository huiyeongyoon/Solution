//맘에안들어
function solution(total, numbers) {
    const obj = {};

    for (let i = 0; i < numbers.length; i++) {
        const key = numbers[i];
        // console.log(obj[key]);
        if (obj[key]) {
            obj[key] += 1; //객체에 벨류값 증가
        } else {
            obj[key] = 1; //객체에 키에 벨류를 넣어줘야 프로퍼티가 생성된다
        }
    }
    // console.log(obj);

    let max = 0;
    let result = '';
    //key = key 이름
    for (const key in obj) {
        // console.log(key);
        // console.log(obj[key]);

        if (max < obj[key]) {
            max = obj[key]; //벨류값 구하기
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