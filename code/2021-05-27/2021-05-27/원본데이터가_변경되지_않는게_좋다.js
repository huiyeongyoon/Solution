// 불변성
// 되도록이면
// 배열, 유사배열, 객체 같은 애들은! 바뀌지 않는게 좋아

function f1(arr) {
  arr[1] = 20;
  return arr;
}

const arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]
const arr2 = f1(arr);

console.log(arr); // [1, 20, 3]
console.log(arr2); // [1, 20, 3]