function solution(submitStudentsNum) {

    const studentsNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    for (let i = 0; i < submitStudentsNum.length; i++) {
        for (let j = i+1; j < submitStudentsNum.length; j++) {
            if (submitStudentsNum[i] > submitStudentsNum[j]) {
                [submitStudentsNum[i],submitStudentsNum[j]] = [submitStudentsNum[j],submitStudentsNum[i]]
            }
        }
    }

    for (let i = 0; i < studentsNum.length; i++) {
        if (submitStudentsNum[i] !== studentsNum[i]) {
            console.log(submitStudentsNum[i]);
        } else {

        }
    }

}

console.log(solution([3, 1, 4, 5, 7, 9, 6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30])); // 2 8

