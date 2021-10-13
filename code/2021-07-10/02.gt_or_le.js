const solution = (a,b) => {

    if ( a > b ){
        return '>';
    } else if (a < b) {
        return '<';
    } else {
        return '=';
    }

}

console.log(solution(200009, 90)); //>
console.log(solution(90,200009)); //<
console.log(solution(90,90)); //=