const solution = (x) => {
    let odd = 0;
    let even = 0;
    for (let i = 1; i < x + 1; i++) {
        if (i % 2 === 0) {
            even += i;
        } else
            odd += i;
    }
    console.log(odd);
    console.log(even)
}

solution(10); //25 30
