const alphabet = "abcdefghijklmnopqrstuvwxyz";
let result = 0;
let answer = "";
for (let i = 0; i < 6; i++) {
    result = Math.floor(Math.random() * alphabet.length)

    answer += alphabet[result];
}
console.log(answer);

