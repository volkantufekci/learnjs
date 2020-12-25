var bar = "bar"
zar = "zarz"

function foo() {
    console.log(this.bar);
    console.log(this.zar);
}

foo();