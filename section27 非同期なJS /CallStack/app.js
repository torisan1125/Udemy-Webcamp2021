const multuply = (x, y) => x * y;

const square = (x) => (x * x);

const isRightTriangle = (a, b ,c) => {
    return square(a) + square(b) === square(c);
}

isRightTriangle(3, 4, 5)