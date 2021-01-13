function ComplexNumber(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
}

ComplexNumber.prototype.add = function (other) {
    return new ComplexNumber( (this.real + other.real), (this.imaginary + other.imaginary));
}
ComplexNumber.prototype.multiply = function (other) {
    return new ComplexNumber( (this.real * other.real - this.imaginary * other.imaginary),
        (this.real * other.imaginary + this.imaginary * other.real));
}

c1 = new ComplexNumber(3, 2)
c2 = new ComplexNumber(1, 4)
console.log(c1.add(c2))
console.log(c1.multiply(c2))