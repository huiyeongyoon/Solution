function solution(n) {
    let reverse = '';
    const s = String(n);

    for (let i = s.length - 1; i >= 0; i--) {
        reverse += s[i];
    }

    return n + Number(reverse);
}

console.log(solution(9730)); // 10109