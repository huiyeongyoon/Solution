// arr의 모든 값을 더하는 기능을 만드시오.
const arr = [1, 3, 2, 4, 5, 3, 2];


let result = 0; // 배열의 요소를 더한 값을 담는 변수
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}

console.log(result); // 20