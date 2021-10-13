// arr 배열에서 3의 갯수를 세시오.
const arr = [1, 3, 2, 4, 5, 3, 2, 4, 5, 3, 2, 4, 5, 3, 2, 4, 5, 3, 2, 4, 5];

let result = 0; // 3의 갯수를 담는 변수
for (let i = 0; i < arr.length; i++) {
  if(3 === arr[i]){
    result+= 1;
  }
}

console.log(result); // 5