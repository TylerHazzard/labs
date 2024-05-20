function getAreaOfCircle(radius) {
    let circleArea = Math.PI * radius * radius;

    return circleArea;
}

console.log(getAreaOfCircle(15));

function getCircumferenceOfCircle(radius) {
    let circumference = 2 * Math.PI * radius;

    return circumference;
}

console.log(getCircumferenceOfCircle(15));

function getAreaOfSquare(side) {
    let squareArea = side * side;

    return squareArea;
}

console.log(getAreaOfSquare(15));

function getAreaOfTriangle(base, height) {
    let triangleArea = base * height / 2;

    return triangleArea;
}

console.log(getAreaOfTriangle(5, 5));