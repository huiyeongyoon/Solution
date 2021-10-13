//뒤에 4자리빼고*표시하기
function solution(phone_number) {

    let phone_numberLast = 0;
// let phone_numberLast1 = phone_number.charAt(phone_number.length -4);
    let result = "";


    for (let i = 0; i < phone_number.length; i++) {
        if(i < phone_number.length - 4){
            result += "*";
            //console.log(phone_number.charAt(i));
        }
        else{
            //console.log(phone_number.charAt(i));
            //result += phone_number.charAt(i);
            result += phone_number[i];  //charAt() === [] 같은기능
        }
    }
    return result;

}

    console.log(solution("7105250212360"));
