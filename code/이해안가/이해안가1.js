function f() {
    console.log(a); //undefiend
    var a = "local";
    console.log(a); // local
    return a;
}
f();

//105페이지 설명이상한데?