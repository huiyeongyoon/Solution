function compaireFunc(key) {
  return function (a,b) {
    return a[key] - b[key];
  };
}
const person =[{name: "Tom", age:17}, {name: "Huck", age:18}, {name: "Becky", age:16}];
person.sort(compaireFunc("age"));

console.log(person);
