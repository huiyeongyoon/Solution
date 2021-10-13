function solution(a, b) {
    let answer = '';
    let days;
    let daysAlphabet = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let result = b % daysAlphabet.length;

    if(a === 1){
        days = daysAlphabet[5];
        console.log(days);
    }else if(a === 2){
        days = daysAlphabet[1];
    }else if(a === 3){
        days = daysAlphabet[2];
    }else if(a === 4){
        days = daysAlphabet[5];
    }else if(a === 5){
        days = daysAlphabet[0];
    }else if(a === 6){
        days = daysAlphabet[3];
    }else if(a === 7){
        days = daysAlphabet[5];
    }else if(a === 8){
        days = daysAlphabet[1];
    }else if(a === 9){
        days = daysAlphabet[4];
    }else if(a === 10){
        days = daysAlphabet[6];
    }else if(a === 11){
        days = daysAlphabet[2];
    }else if(a === 12){
        days = daysAlphabet[4];
    }

    for (let i = 0; i < daysAlphabet.length; i++) {

        result = days % daysAlphabet.length;
    }

    console.log(result);
    return answer;
}

console.log(solution(1,8)); //7일떄 안나온다

//각년도는 28일 29일 30일 31일 존재한다
//1월 1일은 금요일이다

//1월 31일
//2월 29일
//3월 31일
//4월 30일
//5월 31일
//6월 30일
//7월 31일
//8월 31일
//9월 30일
//10월 31일
//11월 30일
//12월 31일