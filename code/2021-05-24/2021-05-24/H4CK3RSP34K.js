const 입력 = "javascript is awesome";
let 출력 = "";

for (let i = 0; i < 입력.length; i++) {
    if(입력[i] === "e") {
        출력 += "3"
    } else if(입력[i] === "i"){
        출력 += "1"
    } else if(입력[i] === "o") {
        출력 += "0"
    } else
        출력 += 입력[i];
}
console.log(출력);