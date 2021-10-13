const arr = []; // 1, 2, 3

for (let i = 1; i < 4; i++) {
  arr.push(i);
}

//console.log(arr);

const arr2 = []; // 4, 5, 6

for (let i = 0; i < 3; i++) {
  arr2.push(i + 4);
}

//console.log(arr2);

const arr3 = [];
arr3.push(arr[0] + arr2[0]);
arr3.push(arr[1] + arr2[1]);
arr3.push(arr[2] + arr2[2]);

console.log(arr3);
