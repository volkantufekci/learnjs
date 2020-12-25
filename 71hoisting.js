// console.log(a);
// var a = 2;
// $> undefined

// foo();
// // bar();
// var foo = function bar() {
//     console.log("bardan");
// }
// $> TypeError: foo is not a function

// foo();
// bar();
// function foo() {
//     console.log("foodan")
// }
// $> foodan
// $> ReferenceError: bar is not defined


// foo();
// var a = true;
// if (a) {
//     function foo() {
//         console.log("if")
//     }
// } else {
//     function foo() {
//         console.log("else")
//     }
// }


// function foo() {
//     console.log("inside")
// }
// foo();
// console.log(foo);
// const foo = "123";
// console.log(foo);

// 'use strict';
// function foo(a) {
//     b = a;
//     console.log(a + b);
// }
// foo(2);

// var foo;
// console.log(foo);
// foo  = "123";
// function foo() {
//     console.log("inside")
// }
// foo();
// console.log(foo);

// foo2();
// var foo2 = function () {
//     console.log("2.foodan")
// }
// function foo2 () {
//     console.log("3.foodan")
// }

// var b = 3;
// console.log(b)
// var b = "asdf";
// console.log(b)


// { // TDZ starts at beginning of scope
//     console.log(bar); // undefined
//     console.log(foo); // ReferenceError
//     var bar = 1;
//     let foo = 2; // End of TDZ (for foo)
// }

// foo();
// function foo() {
//     console.log(1);
// }
// var foo = function () {
//     console.log(2);
// };

// function foo() {
//     console.log(3);
// }

// function doStuff() {
//     function localWork() {
//         console.log(someVariable)
//     }
//
//     localWork()
//     let someVariable = 42
// }
// doStuff()

// if (Math.random() < 0.5) {
//     say('Hello')
//     function say(greeting) { console.log(`${greeting}!`) }
// }
// say('Goodbye')


function setB(a) {
    // const b = a + 3;
    var b = a + 3;
    a = 5;
    function setC() {
        console.log(d);
        function setD() {
            const d = c + 3;
            // const d;
        }
        const c = b + 3;
        setD();
    }
    setC();
    b += 7;
}
var a = 1;
setB(a);
console.log(a);