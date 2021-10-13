function solution(s) {
    var answer = true;
    const numbers = "123456789";

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < s.length; j++) {
            console.log('aaaa');
            if(numbers[i] !== s[j]) {
                answer = false;
            }  else{
                answer = true;
            }
            return answer; //리턴위치에 따라 답이 결정되는데 잘이해가 안간다
        }
    }
}

console.log(solution("2a34"));  //false
console.log(solution("1234"));  //true