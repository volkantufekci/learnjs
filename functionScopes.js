// var a = 2;

foo();

function foo() {
    a = 3;
    console.log(a);
    // var a;
}

console.log(a);


// function foo() {
//      var a = 1;
//
//      function bar() {
//          var b = 2;
//
//          function baz() {
//              var c = 3;
//              console.log(a , b, c);
//          }
//
//          baz();
//          console.log(a, b);
//      }
//
//      bar();
//     console.log(a);
// }
//
// foo();