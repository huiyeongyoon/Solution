let result = '';
for (let i = 0; i < 5; i++) {
    result = "";
    for (let j = 0; j < 5 - i; j++) {
        result += "*";
    }
    console.log(result);
}
