const arr = ['a', 'b', 'c'];
const count = 10;

// for (let i = 0; i < count; i++) {
//   console.log(arr[i]);
//   arr.push(arr[i]);
// }

for (let i = 0; i < count; i++) {
  console.log(i % arr.length);
  // console.log(arr[i % arr.length]);
}

// a
// b
// c
// a
// b
// c
// a
// b
// c
// a