class ComplexNumber {
    constructor(real, imaginary) {
        this._real = real;
        this._imaginary = imaginary;
    }

    get real() {
        return this._real
    }

    set real(real) {
        this._real = real;
    }

    get imaginary() {
        return this._imaginary;
    }

    set imaginary(value) {
        this._imaginary = value;
    }

    add(other) {
        return new ComplexNumber( (this.real + other.real), (this.imaginary + other.imaginary));
    }

    multiply(other) {
        return new ComplexNumber( (this.real * other.real - this.imaginary * other.imaginary),
            (this.real * other.imaginary + this.imaginary * other.real));
    }
}

let c1 = new ComplexNumber(3, 2)
let c2 = new ComplexNumber(1, 4)
console.log(c1.add(c2))
console.log(c1.multiply(c2))