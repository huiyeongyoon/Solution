function solution(n,distance) {

    let left = 0;
    let right = 0;
    let start = 50;
    distance.sort(function (a,b) {
        return a - b;
    });

    for (let i = 0; i < n; i++) {
        if (50 > distance[i] ) {
            left = Math.abs(start - distance[0])
        }
        if (50 < distance[i]) {
            right = Math.abs(start - distance[i]);
        }
    }
    console.log((left + right) * 2)
}

solution(4,[24, 13, 89, 37]); // 152

