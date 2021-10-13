const obj = {
    a: function () {
        console.log(this);
    },
    b: 'abc',
    c: [1, 2, 3, 4],
    d: 30,
    e: true,
    f: null,
    g: { age: 17, name: 'zzz' },
}

obj.a();
console.log(obj.g.age);
console.log(obj.g.age, obj.g.name);
console.log(obj.g['age']);
console.log('obj.g.name', obj.g.name);

console.log(obj.c);
console.log(obj.c[2]);

//let fullAddress = restaurant["address"] + restaurant["city"] + restaurant["state"] + restaurant["zipcode"]

