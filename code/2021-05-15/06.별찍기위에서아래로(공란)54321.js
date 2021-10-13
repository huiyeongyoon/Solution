for (let i = 0; i < 5; i++) {
    let result = "";
    for (let j = 0; j < 5; j++) {
        if(j + 1 > i) {
            result += "*";
        } else {
            result += " ";
        }

    }

console.log(result);
}
