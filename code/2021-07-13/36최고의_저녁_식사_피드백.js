function solution(a,b,c,d,e){
    const arr = [a, b, c, d, e];
    const chefs = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        chefs.push(sum);
    }

    // console.log(chefs);
    let max = chefs[0];
    let index = -1;
    for (let i = 1; i < chefs.length; i++) {
        if (max < chefs[i]) {
            max = chefs[i];
            index = i + 1;
        }
    }

    console.log(index, max);
}

solution([5, 4, 4, 5], [5, 4, 4, 4], [5, 5, 4, 4], [5, 5, 5, 4], [4, 4, 4, 5]); // 4,19
solution([4, 4, 3, 3], [5, 4, 3, 5], [5, 5, 2, 4], [5, 5, 5, 1], [4, 4, 4, 4]); // 2, 17