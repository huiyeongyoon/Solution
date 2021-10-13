function solution(a,b){

    let count = 0;
    let multiplyNum =0;
    let arrBox1 = [];
    while (true) {
        if (a < 1) {
            break;
        }
        a/=10
        count +=1;
        multiplyNum = 10 ** count;
    }
    arrBox1.push((Math.floor(a * multiplyNum)));

    console.log(arrBox1);

}

solution(734,893); //437
solution(221,231); //132
