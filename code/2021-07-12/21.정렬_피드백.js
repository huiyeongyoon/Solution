//오름차순
//첫째 줄은 정렬하기 전의 데이터를 출력하고
//둘째 줄은 정렬한 후의 데이터를 한 개의 공백으로 분리하여 출력하여라.
function solution(a,b) {
    let ascending = [];

    let z = 0;
    console.log(b);
    for (let i = 0; i < a; i++) {
        for (let j = i + 1; j < a; j++) {
            //console.log(b[i],b[j]);
            //각 i번째 값을 j번째 값과 비교한다
            //i 번째는 1씩올라간다
            console.log(z++);
            if (b[i] < b[j]) {
                [b[i],b[j]] = [b[j],b[i]]
            }
        }
    }

    console.log('z', z);
    return ascending = b;
}
console.log(solution(10,[9,6,5,4,3,0,2,1,1,7]));

// 9 6 5 4 3 0 2 1 1 7
// 0 1 1 2 3 4 5 6 7 9
