const result = 'abcdef';

[result[0], result[5]] = [result[5], result[0]];

console.log(result);


const arr = [1, 2, 3, 4, 5, 6];
[arr[0], arr[5]] = [arr[5], arr[0]];

console.log(arr);
