var a =5;
var fn = function () {
    var b = 20;
    function inner() {
        console.log(a++);
        console.log(b++);
    }
    return inner;
};

var fn1 = fn();
fn1(); // 5 20
fn1(); // 6 21 basar. b'yi fn1 kendi icinde sakliyor, 2. kez cagrildiginda sakladigi degeri artiriyor

var fn2 = fn();
fn2(); // 7 20 basar